import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface KafkaMessage {
  key: string;
  value: string;
}

@Controller()
export class KafkaService {
  @EventPattern('test-topic')
  handleMessage(@Payload() message: KafkaMessage): void {
    console.log('Received from Kafka:', message.value);
  }
}
