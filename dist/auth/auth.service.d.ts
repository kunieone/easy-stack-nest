import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): void;
    signin(): void;
    logout(): void;
    refresh(): void;
}
