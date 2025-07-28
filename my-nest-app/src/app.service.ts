import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a: string = 'xazzyy';
    const v: string = 'zzzz';

    return a + v;
  }
}
