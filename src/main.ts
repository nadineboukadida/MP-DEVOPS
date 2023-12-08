import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from "@sentry/node";
import { ProfilingIntegration } from "@sentry/profiling-node";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init({
    dsn: 'https://85f098cc9884f0052b9eaf749af48bda@o4506357247246336.ingest.sentry.io/4506357251899392',
    integrations: [
      new ProfilingIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0,
    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
  });
  await app.listen(3000);
}
bootstrap();
