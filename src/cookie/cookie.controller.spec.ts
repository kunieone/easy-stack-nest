import { Test, TestingModule } from '@nestjs/testing';
import { CookieController } from './cookie.controller';

describe('CookieController', () => {
  let controller: CookieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookieController],
    }).compile();

    controller = module.get<CookieController>(CookieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
