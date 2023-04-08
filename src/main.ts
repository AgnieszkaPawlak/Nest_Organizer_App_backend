import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      transform: true,
    })
  );
  await app.listen(3001);
}
bootstrap();
