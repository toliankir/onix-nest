import { Test, TestingModule } from '@nestjs/testing';
import { UsersApiController } from './users.api.controller';

describe('User.Api Controller', () => {
  let controller: UsersApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersApiController],
    }).compile();

    controller = module.get<UsersApiController>(UsersApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
