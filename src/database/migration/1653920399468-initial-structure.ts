import {MigrationInterface, QueryRunner} from "typeorm";

export class initialStructure1653920399468 implements MigrationInterface {
    name = 'initialStructure1653920399468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attendee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "company" character varying NOT NULL, "email" character varying NOT NULL, "registeredAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_070338c19378315cb793abac656" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presentation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "details" character varying NOT NULL, "room" integer NOT NULL, "speaker" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b3d0364e16cd51d8196a13c528d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "presentation_attendees_attendee" ("presentationId" uuid NOT NULL, "attendeeId" uuid NOT NULL, CONSTRAINT "PK_231da98fc1a7d59d8913e1bc514" PRIMARY KEY ("presentationId", "attendeeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_00e5ee5f3a20ee07fecddc9cfc" ON "presentation_attendees_attendee" ("presentationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f5d9bf86409dbf02a817845d3e" ON "presentation_attendees_attendee" ("attendeeId") `);
        await queryRunner.query(`ALTER TABLE "presentation_attendees_attendee" ADD CONSTRAINT "FK_00e5ee5f3a20ee07fecddc9cfcf" FOREIGN KEY ("presentationId") REFERENCES "presentation"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "presentation_attendees_attendee" ADD CONSTRAINT "FK_f5d9bf86409dbf02a817845d3e1" FOREIGN KEY ("attendeeId") REFERENCES "attendee"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "presentation_attendees_attendee" DROP CONSTRAINT "FK_f5d9bf86409dbf02a817845d3e1"`);
        await queryRunner.query(`ALTER TABLE "presentation_attendees_attendee" DROP CONSTRAINT "FK_00e5ee5f3a20ee07fecddc9cfcf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f5d9bf86409dbf02a817845d3e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_00e5ee5f3a20ee07fecddc9cfc"`);
        await queryRunner.query(`DROP TABLE "presentation_attendees_attendee"`);
        await queryRunner.query(`DROP TABLE "presentation"`);
        await queryRunner.query(`DROP TABLE "attendee"`);
    }

}
