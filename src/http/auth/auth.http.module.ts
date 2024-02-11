import { Module } from '@nestjs/common';
import { AuthModule } from '../../modules/auth/auth.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
})
export class AuthHttpModule {}
