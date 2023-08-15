import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
import { TUser } from 'src/user/user.type';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({ usernameField: 'login' });
  }

  async validate(login: string, password: string): Promise<TUser> {
    const user = this.userService.find(login, password);

    if (user) return user;

    throw new NotFoundException('Login or password invalid');
  }
}
