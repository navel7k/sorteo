import {MigrationInterface, QueryRunner} from "typeorm";

export class sorteo1627052255327 implements MigrationInterface {
    name = 'sorteo1627052255327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "casos_procesales"."casos" ("caso_id" SERIAL NOT NULL, "codigo_unico" character varying(15) NOT NULL, "relato" character varying(255), "fecha_creacion_fud" TIMESTAMP NOT NULL DEFAULT now(), "estado_registro" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_b50e657af93cdbd3afa9e88bc99" UNIQUE ("codigo_unico"), CONSTRAINT "PK_c4cfdb69e586556820739c4788b" PRIMARY KEY ("caso_id"))`);
        await queryRunner.query(`CREATE TABLE "areaorganizacional_entity" ("areaOrganizacional_id" SERIAL NOT NULL, "descripcion" character varying(255), "usuarioRegistro" character varying(20) NOT NULL, "materia" character varying(50), "usuario_creacion" bigint NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_creacion" character varying(30), "usuario_modificacion" bigint NOT NULL, "fecha_modificacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_modificacion" character varying(30), CONSTRAINT "PK_4ad269af85f9eef636d1682f21f" PRIMARY KEY ("areaOrganizacional_id")); COMMENT ON COLUMN "areaorganizacional_entity"."areaOrganizacional_id" IS 'Identificador del registro del Area Organizacional'; COMMENT ON COLUMN "areaorganizacional_entity"."descripcion" IS 'Permite registrar una descripcion detallada del Area Organizacional'; COMMENT ON COLUMN "areaorganizacional_entity"."materia" IS 'Permite registrar la Materia a donde corresponde el Area Organizacional'; COMMENT ON COLUMN "areaorganizacional_entity"."usuario_creacion" IS 'Hace referencia al usuario que registro el ente.'; COMMENT ON COLUMN "areaorganizacional_entity"."fecha_creacion" IS 'Hace referencia a la fecha en la que se creo el ente'; COMMENT ON COLUMN "areaorganizacional_entity"."host_creacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de creación, del ente.'; COMMENT ON COLUMN "areaorganizacional_entity"."usuario_modificacion" IS 'Hace referencia al usuario que modifico información  del ente.'; COMMENT ON COLUMN "areaorganizacional_entity"."fecha_modificacion" IS 'Hace referencia a la fecha en la que se modifico información del ente.'; COMMENT ON COLUMN "areaorganizacional_entity"."host_modificacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de modificación, del ente.'`);
        await queryRunner.query(`CREATE TABLE "ente_entity" ("ente_id" SERIAL NOT NULL, "codigo" character varying(50) NOT NULL, "sigla" character varying(20) NOT NULL, "descripcion" character varying(255), "usuarioRegistro" character varying(50), "usuario_creacion" bigint NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_creacion" character varying(30), "usuario_modificacion" bigint NOT NULL, "fecha_modificacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_modificacion" character varying(30), CONSTRAINT "PK_06c485c2a851a6bbf75b799332c" PRIMARY KEY ("ente_id")); COMMENT ON COLUMN "ente_entity"."ente_id" IS 'Identificador del registro del ente'; COMMENT ON COLUMN "ente_entity"."codigo" IS 'Codigo Unico que identifica de manera única al Ente.'; COMMENT ON COLUMN "ente_entity"."sigla" IS 'Sigla que identifica de manera única al Ente.'; COMMENT ON COLUMN "ente_entity"."descripcion" IS 'Permite registrar una descripcion detallada del ente'; COMMENT ON COLUMN "ente_entity"."usuario_creacion" IS 'Hace referencia al usuario que registro el ente.'; COMMENT ON COLUMN "ente_entity"."fecha_creacion" IS 'Hace referencia a la fecha en la que se creo el ente'; COMMENT ON COLUMN "ente_entity"."host_creacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de creación, del ente.'; COMMENT ON COLUMN "ente_entity"."usuario_modificacion" IS 'Hace referencia al usuario que modifico información  del ente.'; COMMENT ON COLUMN "ente_entity"."fecha_modificacion" IS 'Hace referencia a la fecha en la que se modifico información del ente.'; COMMENT ON COLUMN "ente_entity"."host_modificacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de modificación, del ente.'`);
        await queryRunner.query(`CREATE TABLE "oficina_entity" ("oficina_id" SERIAL NOT NULL, "areaOrganizacional_id" bigint NOT NULL, "municipio_id" bigint NOT NULL, "descripcion" character varying(255), "usuarioRegistro" character varying(50), "usuario_creacion" bigint NOT NULL, "fecha_creacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_creacion" character varying(30), "usuario_modificacion" bigint NOT NULL, "fecha_modificacion" TIMESTAMP NOT NULL DEFAULT 'NOW()', "host_modificacion" character varying(30), CONSTRAINT "PK_a8892f8fd04468f31c8fe27ef95" PRIMARY KEY ("oficina_id")); COMMENT ON COLUMN "oficina_entity"."oficina_id" IS 'Identificador del registro de oficina'; COMMENT ON COLUMN "oficina_entity"."areaOrganizacional_id" IS 'Hace referencia al identificador del Area Organizacional'; COMMENT ON COLUMN "oficina_entity"."municipio_id" IS 'Hace referencia al identificador del Municipio'; COMMENT ON COLUMN "oficina_entity"."descripcion" IS 'Permite registrar una descripcion detallada del ente'; COMMENT ON COLUMN "oficina_entity"."usuario_creacion" IS 'Hace referencia al usuario que registro el ente.'; COMMENT ON COLUMN "oficina_entity"."fecha_creacion" IS 'Hace referencia a la fecha en la que se creo el ente'; COMMENT ON COLUMN "oficina_entity"."host_creacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de creación, del ente.'; COMMENT ON COLUMN "oficina_entity"."usuario_modificacion" IS 'Hace referencia al usuario que modifico información  del ente.'; COMMENT ON COLUMN "oficina_entity"."fecha_modificacion" IS 'Hace referencia a la fecha en la que se modifico información del ente.'; COMMENT ON COLUMN "oficina_entity"."host_modificacion" IS 'Hace referencia a la direccion ip de donde llego la solicitud de modificación, del ente.'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "oficina_entity"`);
        await queryRunner.query(`DROP TABLE "ente_entity"`);
        await queryRunner.query(`DROP TABLE "areaorganizacional_entity"`);
        await queryRunner.query(`DROP TABLE "casos_procesales"."casos"`);
    }

}
