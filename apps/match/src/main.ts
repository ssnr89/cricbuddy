import { NestFactory } from '@nestjs/core';
import { MatchModule } from './match.module';

async function bootstrap() {
  const app = await NestFactory.create(MatchModule);
  await app.listen(3000);
}
bootstrap();
