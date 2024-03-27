import { Controller, Get } from '@nestjs/common';
import { PlayerService } from 'src/services/player.service';

@Controller('/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/image')
  getImage(): string {
    return this.playerService.getImage();
  }
}
