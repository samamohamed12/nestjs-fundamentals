import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips non-whitelisted properties
      forbidNonWhitelisted: true, // throws error for non-whitelisted properties
      transform: true, // transforms payload to DTO instance
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
