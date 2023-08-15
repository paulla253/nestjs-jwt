import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginController } from './login.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from './login.service';
import { LocalStrategy } from 'src/strategy/local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      privateKey: '123456',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService, LoginService, LocalStrategy],
  controllers: [LoginController],
})
export class LoginModule {}
