/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `post` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `slug` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `post_slug_key` ON `post`(`slug`);
