import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690563188016 implements MigrationInterface {
    name = 'InitialMigration1690563188016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
