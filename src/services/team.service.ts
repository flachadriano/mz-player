import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { Canva } from "src/lib/canva";

@Injectable()
export class TeamService {

  renderImage(path: string, width: number, height: number) {
    const posX = 10;
    let posY = 10;
    const lineHeight = 20;

    const text = readFileSync(path);
    const lines = text.toString().split('\n');
    const canva = new Canva(width, height);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.startsWith('##')) {
        canva.writeBlackText(line.substring(2), posX, posY += lineHeight, 18)
      } else if (line.startsWith('#')) {
        canva.writeBlackText(line.substring(1), posX, posY += lineHeight, 20)
      } else {
        canva.writeBlackText(line, posX, posY += lineHeight, 14);
      }
    }

    return canva.canva.toBuffer();
  }
}