import { Injectable } from '@nestjs/common';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { UpdatePabellonDto } from './dto/update-pabellon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pabellon } from './entities/pabellon.entity';

@Injectable()
export class PabellonService {

  constructor(
      @InjectRepository(Pabellon)
      private repository: Repository<Pabellon>
    ) {}

  create(createPabellonDto: CreatePabellonDto) {
    return this.repository.save(createPabellonDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updatePabellonDto: UpdatePabellonDto) {
    return this.repository.update(id, updatePabellonDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
