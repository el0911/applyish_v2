/*
  Warnings:

  - You are about to drop the column `coachId` on the `Client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_coachId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "coachId";

-- CreateTable
CREATE TABLE "_CareerCoachToClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CareerCoachToClient_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CareerCoachToClient_B_index" ON "_CareerCoachToClient"("B");

-- AddForeignKey
ALTER TABLE "_CareerCoachToClient" ADD CONSTRAINT "_CareerCoachToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "CareerCoach"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CareerCoachToClient" ADD CONSTRAINT "_CareerCoachToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
