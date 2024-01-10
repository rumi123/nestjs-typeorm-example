import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Swagger } from 'swagger/swagger.setup';
import { swaggerConfig } from './config/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Swagger.setup(app,swaggerConfig)

  await app.listen(3000);
}
bootstrap();
