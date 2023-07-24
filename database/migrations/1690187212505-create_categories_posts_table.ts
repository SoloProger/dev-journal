import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoriesPostsTable1690187212505 implements MigrationInterface {
    name = 'CreateCategoriesPostsTable1690187212505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts_categories_categories" ("postsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_dcb828476cfb3dac4d2eb823faf" PRIMARY KEY ("postsId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f50a96e3d32263cc97588d91d6" ON "posts_categories_categories" ("postsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bb4ea8658b6d38df2a5f93cd50" ON "posts_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "posts_categories_categories" ADD CONSTRAINT "FK_f50a96e3d32263cc97588d91d6e" FOREIGN KEY ("postsId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "posts_categories_categories" ADD CONSTRAINT "FK_bb4ea8658b6d38df2a5f93cd506" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts_categories_categories" DROP CONSTRAINT "FK_bb4ea8658b6d38df2a5f93cd506"`);
        await queryRunner.query(`ALTER TABLE "posts_categories_categories" DROP CONSTRAINT "FK_f50a96e3d32263cc97588d91d6e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bb4ea8658b6d38df2a5f93cd50"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f50a96e3d32263cc97588d91d6"`);
        await queryRunner.query(`DROP TABLE "posts_categories_categories"`);
    }

}
