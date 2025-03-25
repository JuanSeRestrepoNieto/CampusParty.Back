import { Test, TestingModule } from '@nestjs/testing';
import { PabellonController } from './pabellon.controller';
import { PabellonService } from './pabellon.service';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { UpdatePabellonDto } from './dto/update-pabellon.dto';

describe('PabellonController', () => {
  let controller: PabellonController;
  let service: PabellonService;

  const mockPabellonService = {
    create: jest.fn(dto => ({ id: 1, ...dto })),
    findAll: jest.fn(() => [{ id: 1, nombre: 'Tech Pavilion', tematica: 'Technology' }]),
    findOne: jest.fn(id => ({ id, nombre: 'Tech Pavilion', tematica: 'Technology' })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn(id => ({ message: `Pabellon with id ${id} deleted` })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PabellonController],
      providers: [{ provide: PabellonService, useValue: mockPabellonService }],
    }).compile();

    controller = module.get<PabellonController>(PabellonController);
    service = module.get<PabellonService>(PabellonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create a pabellon', async () => {
      const dto: CreatePabellonDto = { nombre: 'Tech Pavilion', tematica: 'Technology', area: 500, ubicacion: 'A1', capacidad: 100 };
      expect(await controller.create(dto)).toEqual({ id: 1, ...dto });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of pabellones', async () => {
      expect(await controller.findAll()).toEqual([{ id: 1, nombre: 'Tech Pavilion', tematica: 'Technology' }]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should return a single pabellon', async () => {
      expect(await controller.findOne('1')).toEqual({ id: 1, nombre: 'Tech Pavilion', tematica: 'Technology' });
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update()', () => {
    it('should update a pabellon', async () => {
      const dto: UpdatePabellonDto = { nombre: 'Updated Pavilion', tematica: 'Science' };
      expect(await controller.update('1', dto)).toEqual({ id: 1, ...dto });
      expect(service.update).toHaveBeenCalledWith(1, dto);
    });
  });

  describe('remove()', () => {
    it('should remove a pabellon', async () => {
      expect(await controller.remove('1')).toEqual({ message: `Pabellon with id 1 deleted` });
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
