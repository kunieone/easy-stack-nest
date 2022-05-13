import { Controller, Response, Get, Render, Request } from '@nestjs/common';

@Controller('session')
export class SessionController {
  @Get()
  index(@Request() req): string {
    req.session.name = '我是session';
    return '1';
  }

  @Get('get')
  index2(@Request() req): string {
    return req.session;
  }
}
