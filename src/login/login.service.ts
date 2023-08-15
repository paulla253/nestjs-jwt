import { Injectable } from '@nestjs/common';
import { TLogin } from './login.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async login(payload: TLogin): Promise<TLogin> {
    const subToken = { sub: payload.id, email: payload.login };

    return {
      ...payload,
      token: this.jwtService.sign(subToken),
    };
  }
}
