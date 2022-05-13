import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/signup')
 async signup(@Body() dto: AuthDto): Promise<Tokens> {
    this.authService.signup(dto);
  }

  @Post('/local/signin')
  signin() {
    this.authService.signin();
  }

  @Post('/logout')
  logout() {
    this.authService.logout();
  }

  @Post('/refresh')
  refresh() {
    this.authService.refresh();
  }
}
