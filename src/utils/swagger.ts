import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function initializeSwagger(app) {
  const builder = new DocumentBuilder().setTitle('Notes API').addBearerAuth();

  const config = builder.build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [],
  });
  SwaggerModule.setup('api-docs', app, document);
}
