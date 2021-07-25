import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class OficinaEntity {
  @PrimaryGeneratedColumn('increment', {
    comment: 'Identificador del registro de oficina',
  })
  oficina_id: number;

  @Column({
    type: 'int8',
    name: 'areaOrganizacional_id',
    nullable: false,
    comment: 'Hace referencia al identificador del Area Organizacional',
  })
  areaOrganizacionlId: number;

  @Column({
    type: 'int8',
    name: 'municipio_id',
    nullable: false,
    comment: 'Hace referencia al identificador del Municipio',
  })
  municipioId: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: 'Permite registrar una descripcion detallada del ente',
  })
  descripcion: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: '',
  })
  usuarioRegistro: string;

  @Column({
    type: 'int8',
    name: 'usuario_creacion',
    comment: 'Hace referencia al usuario que registro el ente.',
    nullable: false,
  })
  usuarioCreacion: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'fecha_creacion',
    comment: 'Hace referencia a la fecha en la que se creo el ente',
    default: 'NOW()',
  })
  fechaCreacion: Date;
  @Column({
    type: 'varchar',
    length: 30,
    name: 'host_creacion',
    comment:
      'Hace referencia a la direccion ip de donde llego la solicitud de creación, del ente.',
    nullable: true,
  })
  hostCreacion: string;
  @Column({
    type: 'int8',
    name: 'usuario_modificacion',
    comment: 'Hace referencia al usuario que modifico información  del ente.',
    nullable: false,
  })
  usuarioModificacion: number;
  @UpdateDateColumn({
    type: 'timestamp',
    name: 'fecha_modificacion',
    comment:
      'Hace referencia a la fecha en la que se modifico información del ente.',
    default: 'NOW()',
  })
  fechaModificacion: Date;
  @Column({
    type: 'varchar',
    length: 30,
    name: 'host_modificacion',
    comment:
      'Hace referencia a la direccion ip de donde llego la solicitud de modificación, del ente.',
    nullable: true,
  })
  hostModificacion: string;
}
