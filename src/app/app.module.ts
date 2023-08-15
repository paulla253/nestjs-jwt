import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
