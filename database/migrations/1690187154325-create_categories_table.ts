import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriesTable1690187154325 implements MigrationInterface {
    name = 'CreateCategoriesTable1690187154325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "categoryId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "categoryId" integer`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
