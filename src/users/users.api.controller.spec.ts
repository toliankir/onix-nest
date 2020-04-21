import { Test, TestingModule } from '@nestjs/testing';
import { User.ApiController } from './user.api.controller';

describe('User.Api Controller', () => {
  let controller: User.ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User.ApiController],
    }).compile();

    controller = module.get<User.ApiController>(User.ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
