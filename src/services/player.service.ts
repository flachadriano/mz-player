import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  getImage(): string {
    return 'new image';
  }
}
