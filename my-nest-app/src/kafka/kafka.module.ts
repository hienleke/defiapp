import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Module({
  controllers: [KafkaService],
})
export class KafkaModule {}
