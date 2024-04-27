import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

declare const module: any;
const corsOptionsDelegate = function (req, callback) {
  callback(null, { origin: false }); // callback expects two parameters: error and options
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptionsDelegate);

  const config = new DocumentBuilder()
    .setTitle('Farm')
    .setDescription('The farm description')
    .setVersion('1.0')
    .addTag('farm')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
