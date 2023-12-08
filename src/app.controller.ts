import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): number {
    return this.appService.getUsers();
  }
  @Get(':name')
  getPersonalizedGreeting(@Param('name') name: string): string {
    return this.appService.getPersonalizedGreeting(name);
  }

  @Get('users')
  getFakeUsers(): any[] {
    return this.appService.getFakeUsers();
  }
  @Get('available')
  getAvailableAnimals(): { id: number; name: string; type: string }[] {
    return this.appService.getAvailableAnimals();
  }
}
