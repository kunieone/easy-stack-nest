import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 提供静态资源服务
import { ServeStaticModule } from '@nestjs/serve-static';
import * as cookieParser from 'cookie-parser';
/* 加入会话中间件 */
import * as session from 'express-session';
import { Validate } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
const SecretKey = 'cookie';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser(SecretKey)).use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        /* 这里会追加时间 */
        maxAge: 9000 /* Need to configure the expire time for session because of session middleware is based on cookie */,
      },

      rolling: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
