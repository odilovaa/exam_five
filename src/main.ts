import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
  try {
    const config = new DocumentBuilder()
    .setTitle('Print House')
    .setDescription('Project for print house')
    .setVersion('1.0.0')
    .addTag('NodeJS, NestJS, JWT, Sequelize, Swagger, Postgres')
    .build();

    const PORT = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule);
    const document = await SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/docs', app, document)

    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => {
      console.log(`Seerver listening on ${PORT}`);
    })

  } catch (error) {
    console.log(error);
  }
}

start();
