import { Module } from '@nestjs/common';
import { PabellonService } from './pabellon.service';
import { PabellonController } from './pabellon.controller';

@Module({
  controllers: [PabellonController],
  providers: [PabellonService],
})
export class PabellonModule {}
