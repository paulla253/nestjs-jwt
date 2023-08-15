import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from './login.service';
import { TLogin } from './login.type';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() payload: any): Promise<TLogin> {
    return this.loginService.login(payload.user);
  }
}
