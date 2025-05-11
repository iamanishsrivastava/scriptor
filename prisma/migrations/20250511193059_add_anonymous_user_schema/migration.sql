-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "anonymousUserId" TEXT;

-- AlterTable
ALTER TABLE "Script" ADD COLUMN     "anonymousUserId" TEXT;

-- AlterTable
ALTER TABLE "Voice" ADD COLUMN     "anonymousUserId" TEXT;

-- CreateTable
CREATE TABLE "AnonymousUser" (
    "id" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "AnonymousUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_anonymousUserId_fkey" FOREIGN KEY ("anonymousUserId") REFERENCES "AnonymousUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_anonymousUserId_fkey" FOREIGN KEY ("anonymousUserId") REFERENCES "AnonymousUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voice" ADD CONSTRAINT "Voice_anonymousUserId_fkey" FOREIGN KEY ("anonymousUserId") REFERENCES "AnonymousUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
