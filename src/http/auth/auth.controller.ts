import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthReqDto } from '../../modules/auth/dto/AuthReqDto';
import { AuthResDto } from '../../modules/auth/dto/AuthResDto';

@ApiTags('Authorization Endpoints')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Returns user token' })
  @ApiCreatedResponse({
    description: 'Returns HTTP 201 if success',
    type: AuthResDto,
  })
  async login(@Body() user: AuthReqDto): Promise<AuthResDto> {
    return this.authService.login(user);
  }
}
