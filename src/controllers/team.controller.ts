import { Controller, Get, Header, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { TeamService } from 'src/services/team.service';

@Controller('/team')
@ApiTags('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({ summary: 'Render buy and sell strategy' })
  @Get('/buy-and-sell')
  @Header('Content-Type', 'image/png')
  async getBuyAndSellImage(@Query('w') width: string, @Query('h') height: string, @Res() res: Response): Promise<any> {
    res.set({ 'Content-Type': 'image/png' });
    res.send(await this.teamService.renderStrategyImage('public/buy-and-sell.txt', Number(width), Number(height)))
  }

  @ApiOperation({ summary: 'Render juniors strategy' })
  @Get('/juniors')
  @Header('Content-Type', 'image/png')
  async getJuniorsImage(@Query('w') width: string, @Query('h') height: string, @Res() res: Response): Promise<any> {
    res.set({ 'Content-Type': 'image/png' });
    res.send(await this.teamService.renderStrategyImage('public/juniors.txt', Number(width), Number(height)))
  }
}
