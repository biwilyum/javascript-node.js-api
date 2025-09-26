-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerName` VARCHAR(191) NOT NULL,
    `productName` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `totalAmount` DECIMAL(10, 2) NOT NULL,
    `orderDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
