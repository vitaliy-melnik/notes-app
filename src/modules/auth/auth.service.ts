import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { superUser } from './auth.const';
import { AuthResDto } from './dto/AuthResDto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = superUser;
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<AuthResDto> {
    try {
      const payload = { login: user.login, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
