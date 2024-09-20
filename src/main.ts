import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_NAME, PORT } from './foundation/constant/index.constant';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger(__dirname);
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(APP_NAME);
  app.enableCors();

  await app.listen(PORT);
  logger.log(`server is running in ${PORT} port`);
}
bootstrap();
