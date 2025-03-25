import { Test, TestingModule } from '@nestjs/testing';
import { PabellonService } from './pabellon.service';
import { Pabellon } from './entities/pabellon.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { UpdatePabellonDto } from './dto/update-pabellon.dto';

describe('PabellonService', () => {
  let service: PabellonService;
  let repository: Repository<Pabellon>;

  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PabellonService,
        { provide: getRepositoryToken(Pabellon), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<PabellonService>(PabellonService);
    repository = module.get<Repository<Pabellon>>(getRepositoryToken(Pabellon));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should save a new pabellon', async () => {
      const dto: CreatePabellonDto = {
        nombre: 'Tech Pavilion',
        tematica: 'Technology',
        area: 500,
        ubicacion: 'A1',
        capacidad: 100,
      };

      mockRepository.save.mockResolvedValue({ id: 1, ...dto });

      expect(await service.create(dto)).toEqual({ id: 1, ...dto });
      expect(repository.save).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of pabellones', async () => {
      const result = [{ id: 1, nombre: 'Tech Pavilion', tematica: 'Technology' }];
      mockRepository.find.mockResolvedValue(result);

      expect(await service.findAll()).toEqual(result);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should return a pabellon by ID', async () => {
      const result = { id: 1, nombre: 'Tech Pavilion', tematica: 'Technology' };
      mockRepository.findOne.mockResolvedValue(result);

      expect(await service.findOne(1)).toEqual(result);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });

  describe('update()', () => {
    it('should update a pabellon', async () => {
      const dto: UpdatePabellonDto = { nombre: 'Updated Pavilion' };
      mockRepository.update.mockResolvedValue({ affected: 1 });

      expect(await service.update(1, dto)).toEqual({ affected: 1 });
      expect(repository.update).toHaveBeenCalledWith(1, dto);
    });
  });

  describe('remove()', () => {
    it('should delete a pabellon', async () => {
      mockRepository.delete.mockResolvedValue({ affected: 1 });

      expect(await service.remove(1)).toEqual({ affected: 1 });
      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });
});
