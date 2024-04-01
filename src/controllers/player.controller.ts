import { Controller, Get, Header, Param, Req, Res } from '@nestjs/common';
import { PlayerService } from 'src/services/player.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Player } from 'src/entities/player.entity';
import { Skill } from 'src/entities/skill.entity';


@Controller('/player')
@ApiTags('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @ApiOperation({ summary: 'Render player image' })
  @Get('/image/:data')
  @Header('Content-Type', 'image/png')
  async getImage(@Param('data') data: string, @Res() res: Response): Promise<any> {
    const stats = data.split('@');
    
    const player = new Player();
    player.name = stats[0];
    player.age = Number(stats[1]);
    player.speed = Skill.read(stats[2]);
    player.stamina = Skill.read(stats[3]);
    player.intelligence = Skill.read(stats[4]);
    player.passing = Skill.read(stats[5]);
    player.shooting = Skill.read(stats[6]);
    player.heading = Skill.read(stats[7]);
    player.keeping = Skill.read(stats[8]);
    player.ballControl = Skill.read(stats[9]);
    player.tackling = Skill.read(stats[10]);
    player.aerialPassing = Skill.read(stats[11]);
    player.setPlays = Skill.read(stats[12]);

    res.set({ 'Content-Type': 'image/png' });
    res.send(await this.playerService.getImage(player))
  }
}
