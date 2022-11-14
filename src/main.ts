import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
// import { setupSwagger } from './swagger-config';
// import { AllExceptionsFilter } from './shared/filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  // app.enableCors({
  //   origin: ['*'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   // credentials: true,
  // });

  app.use(json({ limit: '100mb' }));

  app.use(
    urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }),
  );

  app.use(morgan('combined'));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // whitelist: true,
      dismissDefaultMessages: true,
      validationError: {
        target: false,
      },
    }),
  );

  // app.useGlobalFilters(new AllExceptionsFilter());
  if (['development', 'staging'].includes(process.env.NODE_ENV)) {
    // setupSwagger(app);
  }

  const PORT = process.env.API_PORT || 8000;

  await app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`),
  );
}

void bootstrap();
