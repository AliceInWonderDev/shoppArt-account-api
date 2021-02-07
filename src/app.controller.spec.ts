import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AccountService } from './account/account.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AccountService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a number', async() => {
      expect(await appController.getAccount('9877384')).toBe(undefined);
    });
  });
});
