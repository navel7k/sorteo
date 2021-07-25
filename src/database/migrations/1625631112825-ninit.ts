import {MigrationInterface, QueryRunner} from "typeorm";

export class ninit1625631112825 implements MigrationInterface {
    name = 'ninit1625631112825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "casos_procesales"."casos" ("caso_id" SERIAL NOT NULL, "codigo_unico" character varying(15) NOT NULL, "relato" character varying(255), "fecha_creacion_fud" TIMESTAMP NOT NULL DEFAULT now(), "estado_registro" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_b50e657af93cdbd3afa9e88bc99" UNIQUE ("codigo_unico"), CONSTRAINT "PK_c4cfdb69e586556820739c4788b" PRIMARY KEY ("caso_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "casos_procesales"."casos"`);
    }

}
