import { Module } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule, AppModule],
  controllers: [],
  providers: [],
})
export class StartApp {}
