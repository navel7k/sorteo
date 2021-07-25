import { Injectable } from '@nestjs/common';
import { TypeMapper } from 'ts-mapper';
//import { Caso } from '../modules/caso/caso.entity';
//import { CasoDto } from "../modules/caso/dto/caso.dto";

@Injectable()
export class MapperService extends TypeMapper {
  constructor() {
    super();
    this.config();
  }

  private config(): void {
  /*   this.createMap<Caso, CasoDto>()
      .map(entity => entity.caso_id, dto => dto.id)
      .map(entity => entity.codigo_unico, dto => dto.codigo_unico)
      .map(entity => entity.relato, dto => dto.relato)
      .map(entity => entity.fecCreFud, dto => dto.fecCreFud)
      .map(entity => entity.registroActivo, dto => dto.registroActivo);*/
  } 
}
