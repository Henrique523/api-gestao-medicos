import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialTables1623948818338 implements MigrationInterface {
    name = 'InitialTables1623948818338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Specialities` (`description` varchar(255) NOT NULL, PRIMARY KEY (`description`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Doctors` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, `name` varchar(120) NOT NULL, `crm` varchar(7) NOT NULL, `phone` varchar(255) NOT NULL, `cellphone` varchar(255) NOT NULL, `cep` varchar(8) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `doctors_specialities__specialities` (`doctorsId` int NOT NULL, `specialitiesDescription` varchar(255) NOT NULL, INDEX `IDX_d898582779ff9d9e9738d70eb3` (`doctorsId`), INDEX `IDX_07157443866397eda2779bd1c1` (`specialitiesDescription`), PRIMARY KEY (`doctorsId`, `specialitiesDescription`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `doctors_specialities__specialities` ADD CONSTRAINT `FK_d898582779ff9d9e9738d70eb3c` FOREIGN KEY (`doctorsId`) REFERENCES `Doctors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `doctors_specialities__specialities` ADD CONSTRAINT `FK_07157443866397eda2779bd1c15` FOREIGN KEY (`specialitiesDescription`) REFERENCES `Specialities`(`description`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doctors_specialities__specialities` DROP FOREIGN KEY `FK_07157443866397eda2779bd1c15`");
        await queryRunner.query("ALTER TABLE `doctors_specialities__specialities` DROP FOREIGN KEY `FK_d898582779ff9d9e9738d70eb3c`");
        await queryRunner.query("DROP INDEX `IDX_07157443866397eda2779bd1c1` ON `doctors_specialities__specialities`");
        await queryRunner.query("DROP INDEX `IDX_d898582779ff9d9e9738d70eb3` ON `doctors_specialities__specialities`");
        await queryRunner.query("DROP TABLE `doctors_specialities__specialities`");
        await queryRunner.query("DROP TABLE `Doctors`");
        await queryRunner.query("DROP TABLE `Specialities`");
    }

}
