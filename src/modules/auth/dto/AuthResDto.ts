import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthResDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  access_token: string;
}
