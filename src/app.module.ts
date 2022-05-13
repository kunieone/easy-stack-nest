import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieController } from './cookie/cookie.controller';
import { SessionController } from './session/session.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
    }),

    AuthModule,

    PrismaModule,
  ],
  controllers: [AppController, CookieController, SessionController],
  providers: [AppService],
})
export class AppModule {}
