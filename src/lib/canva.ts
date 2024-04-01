import { Canvas, CanvasRenderingContext2D, createCanvas, loadImage } from "canvas";

export class Canva {
  canva: Canvas;
  ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    this.canva = createCanvas(width, height);
    this.ctx = this.canva.getContext('2d');
}

  async drawImage(path: string, posX: number, posY: number) {
    this.ctx.drawImage(await loadImage(path), posX, posY);
  }

  writeWhiteText(text: string, posX: number, posY: number) {
    this.ctx.fillStyle = "#f2f2f2";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(text, posX, posY);
  }
  
  writeBlackText(text: string, posX: number, posY: number, fontSize = 10) {
    this.ctx.fillStyle = "#000";
    this.ctx.font = `${fontSize}px Arial`;
    this.ctx.fillText(text, posX, posY);
  }
  
}