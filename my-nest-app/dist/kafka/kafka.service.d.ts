interface KafkaMessage {
    key: string;
    value: string;
}
export declare class KafkaService {
    handleMessage(message: KafkaMessage): void;
}
export {};
