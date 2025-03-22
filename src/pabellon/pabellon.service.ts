import { Injectable } from '@nestjs/common';
import { CreatePabellonDto } from './dto/create-pabellon.dto';
import { UpdatePabellonDto } from './dto/update-pabellon.dto';

@Injectable()
export class PabellonService {
  create(createPabellonDto: CreatePabellonDto) {
    return 'This action adds a new pabellon';
  }

  findAll() {
    return `This action returns all pabellon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pabellon`;
  }

  update(id: number, updatePabellonDto: UpdatePabellonDto) {
    return `This action updates a #${id} pabellon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pabellon`;
  }
}
