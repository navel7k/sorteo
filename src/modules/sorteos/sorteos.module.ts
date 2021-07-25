import { SorteoEntity } from './entities/sorteo.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SorteosService } from './sorteos.service';
import { SorteosController } from './sorteos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SorteoEntity])],
  controllers: [SorteosController],
  providers: [SorteosService]
})
export class SorteosModule {

 }
