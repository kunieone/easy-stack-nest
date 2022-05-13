import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieController } from './cookie/cookie.controller';
import { SessionController } from './session/session.controller';

@Module({
  imports: [],
  controllers: [AppController, CookieController, SessionController],
  providers: [AppService],
})
export class AppModule {}
