import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNoteReqDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;
}
