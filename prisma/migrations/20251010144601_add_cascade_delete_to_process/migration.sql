-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_clientId_fkey";

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
