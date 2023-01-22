/*
  Warnings:

  - You are about to alter the column `createdDate` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `createdDate` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `products` MODIFY `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
