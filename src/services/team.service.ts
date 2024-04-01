import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { Canva } from "src/lib/canva";

@Injectable()
export class TeamService {

  renderStrategyImage(path: string, width: number, height: number) {
    const posX = 10;
    let posY = 10;
    const lineHeight = 20;

    const text = readFileSync(path);
    const lines = text.toString().split('\n');
    const canva = new Canva(width, height);

    for (let i = 0; i < lines.length; i++) {
      canva.writeBlackText(lines[i], posX, posY += lineHeight, 14);
    }

    return canva.canva.toBuffer();
  }
}