import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class AppModule {}
