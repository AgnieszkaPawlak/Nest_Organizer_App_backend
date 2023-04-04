import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      // @TODO
      //During create user return more data
      // whitelist: true,
      // forbidNonWhitelisted: true,
      transform: true,
    })
  );
  await app.listen(3001);
}
bootstrap();
