import { NestFactory } from '@nestjs/core';
import { StartApp } from './start-app.module';

async function bootstrap() {
  const app = await NestFactory.create(StartApp);
  await app.listen(3000);
}
bootstrap();
