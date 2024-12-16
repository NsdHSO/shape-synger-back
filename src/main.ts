import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import * as process from 'node:process';

declare const module: any;
const allowlist = [
  'http://localhost:4200',
  'capacitor://localhost',
  'ionic://localhost',
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: true };
  }
  callback(null, corsOptions);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Farm')
    .setDescription('The farm description')
    .setVersion('1.0')
    .addTag('farm')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors(corsOptionsDelegate);
  if (process.env.PORT) {
    // eslint-disable-next-line
    console.log('Server was started:', process.env.PORT);
  } else {
    // eslint-disable-next-line
    console.log('Server started:', 3000);
  }
  await app.listen(process.env.PORT || 3000), '0.0.0.0';

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
