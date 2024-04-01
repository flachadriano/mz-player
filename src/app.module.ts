import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';

@Module({
  imports: [],
  controllers: [PlayerController, TeamController],
  providers: [PlayerService, TeamService],
})
export class AppModule {}
