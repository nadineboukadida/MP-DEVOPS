import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users =["test", "test1"]
  getHello(): number {
    return this.users.length;
  }
}
