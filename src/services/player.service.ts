import { Injectable } from '@nestjs/common';
import { CanvasRenderingContext2D, createCanvas, loadImage } from 'canvas';
import { Player } from 'src/entities/player.entity';
import { Skill } from 'src/entities/skill.entity';
import { Canva } from 'src/lib/canva';

@Injectable()
export class PlayerService {

  WIDTH = 210;
  HEIGHT = 212;
  BASE_IMAGE = 'assets/img/player.png';
  BALL_IMAGE = 'assets/img/ball.png';
  NEW_BALL_IMAGE = 'assets/img/new-ball.png';

  async getImage(player: Player): Promise<any> {
    const canvas = new Canva(this.WIDTH, this.HEIGHT);

    await canvas.drawImage(this.BASE_IMAGE, 0, 0);

    await canvas.writeWhiteText(`${player.name} (${player.age})`, 5, 14);
    await this.addSkill(canvas, 41, player.speed);
    await this.addSkill(canvas, 54, player.stamina);
    await this.addSkill(canvas, 67, player.intelligence);
    await this.addSkill(canvas, 80, player.passing);
    await this.addSkill(canvas, 93, player.shooting);
    await this.addSkill(canvas, 106, player.heading);
    await this.addSkill(canvas, 119, player.keeping);
    await this.addSkill(canvas, 132, player.ballControl);
    await this.addSkill(canvas, 145, player.tackling);
    await this.addSkill(canvas, 158, player.aerialPassing);
    await this.addSkill(canvas, 171, player.setPlays);

    return canvas.canva.toBuffer();
  }

  private async addSkill(canva: Canva, posY: number, skill: Skill) {
    let posX = 75;
    const interval = 12;
    const intervalLevel = 1;
    const adjustTextPosY = 9;
    const rightPadLevel = 6;

    if (skill.level + skill.evolved > 0) {
      if (skill.level + skill.evolved == 10) {
        canva.writeBlackText(skill.level + skill.evolved, posX, posY + adjustTextPosY);
      } else {
        canva.writeBlackText(skill.level + skill.evolved, posX + rightPadLevel, posY + adjustTextPosY);
      }
    }
    posX += intervalLevel;

    if (skill.level > 0) {
      for (let i = 0; i < skill.level; i++) {
        canva.drawImage(this.BALL_IMAGE, posX += interval, posY);
      }
    }
    if (skill.evolved > 0) {
      for (let i = 0; i < skill.evolved; i++) {
        canva.drawImage(this.NEW_BALL_IMAGE, posX += interval, posY);
      }
    }
  }
}
