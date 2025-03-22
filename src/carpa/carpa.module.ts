import { Module } from '@nestjs/common';
import { CarpaService } from './carpa.service';
import { CarpaController } from './carpa.controller';

@Module({
  controllers: [CarpaController],
  providers: [CarpaService],
})
export class CarpaModule {}
