/*
  Warnings:

  - A unique constraint covering the columns `[referralCode]` on the table `Referrals` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Referrals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Referrals_referralCode_key" ON "Referrals"("referralCode");

-- CreateIndex
CREATE UNIQUE INDEX "Referrals_email_key" ON "Referrals"("email");
