import { Controller, Request, Response, Get } from '@nestjs/common';
@Controller('cookie')
export class CookieController {
  /* 分配一个cookie */
  @Get()
  index(@Response() res) {
    // 在这里设置cookie
    res.cookie('username', "I'm cookie", {
      httpOnly: true,
      maxAge: 4000 /* 4000ms过期 */,
    });
    res.send('已经设置cookie！');
  }

  /* 查询现在的cookie */
  @Get('/gmc')
  index2(@Request() req) {
    // req.cookie.username;
    console.log(req.cookies.username);

    return req.cookies?.username;
  }

  /* 设置加密的cookie，这里需要在main.ts添加密钥，然后在这里添加signed:true */
  @Get('ec')
  index3(@Response() res) {
    // 在这里设置cookie
    res.cookie('username', '我是明文！', {
      /* 这个键值对用来加密 */
      signed: true,
      httpOnly: true,
      maxAge: 40000 /* 40000ms过期 */,
    });
    res.send('已经设置cookie!');
  }

  // 这样我们将无法通过req.cookies获取,需要使用req.signedcookies获取
  @Get('gmec') /* Get My Encrypted Cookies! */ index4(@Request() req) {
    // 当然这里是服务器主动把解密后的cookie明文发给了客户端，所以才不安全。
    return req.signedCookies;
  }
}
