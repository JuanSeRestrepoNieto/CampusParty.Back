import { Module } from '@nestjs/common';
import { PabellonService } from './pabellon.service';
import { PabellonController } from './pabellon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pabellon } from './entities/pabellon.entity';
import { Carpa } from 'src/carpa/entities/carpa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pabellon, Carpa]),
  ],
  controllers: [PabellonController],
  providers: [PabellonService],
})
export class PabellonModule {}
