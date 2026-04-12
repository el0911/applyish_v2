/*
  Warnings:

  - Added the required column `email` to the `Referrals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Referrals" ADD COLUMN     "email" TEXT NOT NULL;
