-- CreateTable
CREATE TABLE "S3File" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "s3Identifier" TEXT NOT NULL,

    CONSTRAINT "S3File_pkey" PRIMARY KEY ("id")
);
