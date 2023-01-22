-- CreateTable
CREATE TABLE `banners` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `subtitle` VARCHAR(100) NOT NULL,
    `imageUrl` VARCHAR(500) NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderproducts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER UNSIGNED NOT NULL,
    `orderId` INTEGER UNSIGNED NOT NULL,
    `quantity` INTEGER NOT NULL,
    `unitPrice` INTEGER NOT NULL,

    INDEX `fk_orderproducts_orderId`(`orderId`),
    INDEX `fk_orderproducts_productId`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `address1` VARCHAR(255) NOT NULL,
    `address2` VARCHAR(255) NOT NULL,
    `subtotal` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `discount` INTEGER NOT NULL,
    `createdDate` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `oldPrice` INTEGER NOT NULL,
    `cardImageUrl` VARCHAR(255) NOT NULL,
    `cardHoverImageUrl` VARCHAR(255) NOT NULL,
    `mainImageUrl` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdDate` BIGINT UNSIGNED NOT NULL,
    `trending` TINYINT UNSIGNED NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `brandId` INTEGER NOT NULL,

    INDEX `fk_product_brandId`(`brandId`),
    INDEX `fk_product_categoryId`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `subtitle` VARCHAR(100) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `imageUrl` VARCHAR(500) NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `orderproducts` ADD CONSTRAINT `fk_orderproducts_orderId` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderproducts` ADD CONSTRAINT `fk_orderproducts_productId` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_product_brandId` FOREIGN KEY (`brandId`) REFERENCES `brands`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_product_categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

