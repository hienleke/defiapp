import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { KafkaModule } from './kafka/kafka.module';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    KafkaModule,
    TypeOrmModule.forFeature([User]),
  ],
})
export class AppModule {
  constructor() {
    const daata = fs.readFileSync(
      path.join(__dirname, '../cert/dbca.crt'),
      'utf-8',
    );
    console.log(
      daata,
      ' test',
      process.env.DB_HOST,
      process.env.DB_PORT,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      process.env.DB_NAME,
    );
  }
}
