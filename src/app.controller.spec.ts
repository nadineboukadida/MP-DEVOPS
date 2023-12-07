import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return users correct length', () => {
      expect(appController.getUsers()).toBe(2);
    });
  });
  
  it('should return a personalized greeting', () => {
    const name = 'John';
    const result = appService.getPersonalizedGreeting(name);
    expect(result).toBe(`Hello, ${name}! Welcome to Nest.js!`);
  });

  it('should return an array of fake users', () => {
    const result = appService.getFakeUsers();
    expect(result).toHaveLength(5);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('username');
    expect(result[0]).toHaveProperty('email');
  });
});
