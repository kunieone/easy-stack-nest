import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    hashData(data: string): Promise<string>;
    signup(dto: AuthDto): Promise<Tokens>;
    signin(): void;
    logout(): void;
    refresh(): void;
}
