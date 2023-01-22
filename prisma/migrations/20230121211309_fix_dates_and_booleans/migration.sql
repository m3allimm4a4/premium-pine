/*
  Warnings:

  - The `createdDate` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdDate` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `trending` on the `products` table. The data in that column could be lost. The data in that column will be cast from `UnsignedTinyInt` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `orders` DROP COLUMN `createdDate`,
    ADD COLUMN `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `products` DROP COLUMN `createdDate`,
    ADD COLUMN `createdDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `trending` BOOLEAN NOT NULL;
