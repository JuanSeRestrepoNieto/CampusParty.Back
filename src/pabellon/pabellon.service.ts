import { Injectable } from '@nestjs/common';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { UpdatePabellonDto } from './dto/update-pabellon.dto';
import { Pabellon } from './entities/pabellon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PabellonService {
  constructor(
    @InjectRepository(Pabellon)
    private readonly pabellonRepository: Repository<Pabellon>,
  ) {}

  create(createPabellonDto: CreatePabellonDto) {
    return this.pabellonRepository.save(createPabellonDto);
  }

  findAll() {
    return this.pabellonRepository.find();
  }

  findOne(id: number) {
    return this.pabellonRepository.findOne({ where: { id } });
  }

  update(id: number, updatePabellonDto: UpdatePabellonDto) {
    return this.pabellonRepository.update(id, updatePabellonDto);
  }

  remove(id: number) {
    return this.pabellonRepository.delete(id);
  }
}
