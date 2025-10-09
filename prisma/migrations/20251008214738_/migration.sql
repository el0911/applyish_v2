/*
  Warnings:

  - The values [applicant] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "ProcessState" AS ENUM ('processing', 'failed', 'success');

-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('client', 'career_coach');
ALTER TABLE "User" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "type" TYPE "UserType_new" USING ("type"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
ALTER TABLE "User" ALTER COLUMN "type" SET DEFAULT 'client';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "type" SET DEFAULT 'client';

-- CreateTable
CREATE TABLE "Process" (
    "id" TEXT NOT NULL,
    "status" "ProcessState" NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Process_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
