/*
  Warnings:

  - You are about to drop the column `username` on the `ApplicationCount` table. All the data in the column will be lost.
  - You are about to drop the column `avgJobs` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `chartData` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `totalJobs` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `weekJobs` on the `Client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientId,weekOfYear,year]` on the table `ApplicationCount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `ApplicationCount` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ApplicationCount_username_weekOfYear_year_key";

-- AlterTable
ALTER TABLE "ApplicationCount" DROP COLUMN "username",
ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "avgJobs",
DROP COLUMN "chartData",
DROP COLUMN "totalJobs",
DROP COLUMN "weekJobs";

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationCount_clientId_weekOfYear_year_key" ON "ApplicationCount"("clientId", "weekOfYear", "year");

-- AddForeignKey
ALTER TABLE "ApplicationCount" ADD CONSTRAINT "ApplicationCount_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
