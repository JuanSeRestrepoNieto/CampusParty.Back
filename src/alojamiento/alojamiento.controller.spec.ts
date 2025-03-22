import { Test, TestingModule } from '@nestjs/testing';
import { AlojamientoController } from './alojamiento.controller';
import { AlojamientoService } from './alojamiento.service';

describe('AlojamientoController', () => {
  let controller: AlojamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlojamientoController],
      providers: [AlojamientoService],
    }).compile();

    controller = module.get<AlojamientoController>(AlojamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
