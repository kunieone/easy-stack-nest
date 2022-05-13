import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async signup(dto: AuthDto): Promise<Tokens> {
    // const newUser = this.prisma.user.create({});
    const hash = await this.hashData(dto.password);

    const newUser = this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
  }
  signin() {}

  logout() {}

  refresh() {}
}
