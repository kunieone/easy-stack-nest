import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() /* 变成全局的模块 */
@Module({
  providers: [PrismaService],  
  exports: [PrismaService], /* 导出 */
})
export class PrismaModule {}
