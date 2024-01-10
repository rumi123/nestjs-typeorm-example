import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  static setup(
    app: INestApplication<any>,
    config: DocumentBuilder,
    routePrefix: string = 'docs',
  ) {
    const document = SwaggerModule.createDocument(app, config.build());
    SwaggerModule.setup(routePrefix, app, document);
  }
}
