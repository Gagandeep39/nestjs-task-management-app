import { NestFactory } from '@nestjs/core';
import { get } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || get('server.port');
  await app.listen(port);
}
bootstrap();
