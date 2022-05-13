import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
/* 加入会话中间件 */
import * as session from 'express-session';
const SecretKey = 'cookie';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
