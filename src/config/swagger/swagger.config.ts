import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Credit Management App')
  .setDescription('Credit Management App Documentation')
  .addBearerAuth(
    {
      type: 'http',
      description: 'access token for authorization',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
    'token',
  )
