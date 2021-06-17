import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialTables1623937453503 implements MigrationInterface {
    name = 'InitialTables1623937453503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `specialities` (`description` varchar(255) NOT NULL, PRIMARY KEY (`description`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `doctors` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT 'now()', `updated_at` timestamp(6) NOT NULL DEFAULT 'now()' ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, `name` varchar(255) NOT NULL, `crm` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `cellphone` varchar(255) NOT NULL, `cep` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `doctors_specialities_specialities` (`doctorsId` int NOT NULL, `specialitiesDescription` varchar(255) NOT NULL, INDEX `IDX_83f4c6edf1a6724971d956deee` (`doctorsId`), INDEX `IDX_9780d2340adde5eaed1f19dc0b` (`specialitiesDescription`), PRIMARY KEY (`doctorsId`, `specialitiesDescription`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `doctors_specialities_specialities` ADD CONSTRAINT `FK_83f4c6edf1a6724971d956deeee` FOREIGN KEY (`doctorsId`) REFERENCES `doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `doctors_specialities_specialities` ADD CONSTRAINT `FK_9780d2340adde5eaed1f19dc0bb` FOREIGN KEY (`specialitiesDescription`) REFERENCES `specialities`(`description`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doctors_specialities_specialities` DROP FOREIGN KEY `FK_9780d2340adde5eaed1f19dc0bb`");
        await queryRunner.query("ALTER TABLE `doctors_specialities_specialities` DROP FOREIGN KEY `FK_83f4c6edf1a6724971d956deeee`");
        await queryRunner.query("DROP INDEX `IDX_9780d2340adde5eaed1f19dc0b` ON `doctors_specialities_specialities`");
        await queryRunner.query("DROP INDEX `IDX_83f4c6edf1a6724971d956deee` ON `doctors_specialities_specialities`");
        await queryRunner.query("DROP TABLE `doctors_specialities_specialities`");
        await queryRunner.query("DROP TABLE `doctors`");
        await queryRunner.query("DROP TABLE `specialities`");
    }

}
