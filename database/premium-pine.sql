-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2023 at 09:33 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `premium-pine`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `imageUrl` varchar(500) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `title`, `subtitle`, `imageUrl`, `url`) VALUES
(1, 'Sweets', 'Checkout our homemade honey', 'https://www.foodnavigator-usa.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodnavigator-usa.com/article/2022/08/17/us-honey-consumption-hits-record-highs-as-domestic-production-steadily-drops-usda-report/15687624-1-eng-GB/US-honey-consumption-hits-record-highs-as-domestic-production-steadily-drops-USDA-report.jpg', '/product-details/1'),
(2, 'Salty', 'Checkout our tasty pickles', 'https://www.tastingtable.com/img/gallery/the-tip-crunchy-pickle-fans-need-to-know/intro-1665605070.jpg', '/product-details/2'),
(3, 'Sweet', 'Peanut Butter', 'https://i.ytimg.com/vi/DUEVr3CMIhk/maxresdefault.jpg', '/product-details/3');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Inhouse');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Sweet'),
(3, 'Salty');

-- --------------------------------------------------------

--
-- Table structure for table `orderproducts`
--

CREATE TABLE `orderproducts` (
  `id` int(11) NOT NULL,
  `productId` int(10) UNSIGNED NOT NULL,
  `orderId` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `unitPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orderproducts`
--

INSERT INTO `orderproducts` (`id`, `productId`, `orderId`, `quantity`, `unitPrice`) VALUES
(6, 1, 4, 1, 10),
(8, 1, 5, 1, 10),
(10, 1, 6, 1, 10),
(11, 1, 7, 1, 10),
(14, 1, 10, 1, 10),
(15, 1, 11, 4, 10);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `createdDate` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `firstName`, `lastName`, `email`, `phone`, `city`, `address1`, `address2`, `subtotal`, `total`, `discount`, `createdDate`) VALUES
(4, 'kjfdgdfsg', 'FSDFSDF', 'DFSFS@sdf.com', '2332423', 'sdfdsf', 'XVDFdfgf', 'xgdfgd', 20, 20, 0, 1672676512842),
(5, 'dslfsdkfs', 'fsdfd', 'dsfs@sd.com', 'adfsdf', 'SDFSDF', 'FSDFSDF', 'FSDF', 20, 20, 0, 1672679081474),
(6, 'dslfsdkfs', 'fsdfd', 'dsfs@sd.com', 'adfsdf', 'SDFSDF', 'FSDFSDF', 'FSDF', 20, 20, 0, 1672679427101),
(7, 'sdfsdf', 'jyfyu', 'yfyufyu@sdfsdf.com', 'fyufuyfuy', 'fuyfuyfuy', 'fyufyuf', 'yfuy', 10, 10, 0, 1672773003454),
(8, 'tft', 'fdtyftyf', 'fyufyuf@ygyu.com', '4234234', 'sdfsdsdf', 'dsfsdf', 'dsfsdf', 20, 20, 0, 1672773756135),
(9, 'osfdsoifj', 'dsfjsdfdsf', 'sdfsd@sdf.om', '2323423', 'fsdfsdf', 'SEFDSFDSF', 'sdfsdfsf', 40, 40, 0, 1672774286128),
(10, 'asdasda', 'uhuioui', 'hiuohuih@sdf', 'uihihiuh', 'uihuihuih', 'uihuih', 'uihiuh', 10, 10, 0, 1672775111527),
(11, 'dsfdsf', 'uigukh', 'uhuihuih@sdf', 'iuhuih', 'hiuhuih', 'iuhuih', 'iuhiuh', 40, 40, 0, 1672775386757);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `oldPrice` int(11) NOT NULL,
  `cardImageUrl` varchar(255) NOT NULL,
  `cardHoverImageUrl` varchar(255) NOT NULL,
  `mainImageUrl` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdDate` bigint(11) UNSIGNED NOT NULL,
  `trending` tinyint(3) UNSIGNED NOT NULL,
  `categoryId` int(11) NOT NULL,
  `brandId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `oldPrice`, `cardImageUrl`, `cardHoverImageUrl`, `mainImageUrl`, `description`, `createdDate`, `trending`, `categoryId`, `brandId`) VALUES
(1, 'Honey', 10, 0, 'https://www.jessicagavin.com/wp-content/uploads/2019/02/honey-pin.jpg', 'https://www.jessicagavin.com/wp-content/uploads/2019/02/honey-pin.jpg', 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528', 'honey inhouse sdfdsf\r\nsdfdsfdsf\r\ndsf\r\ndsf\r\ndsf\r\nsd\r\nfds\r\nf\r\ndsf\r\ndsfsdf', 1672406710381, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `subtitle` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `imageUrl` varchar(500) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title`, `subtitle`, `description`, `imageUrl`, `url`) VALUES
(1, '10% OFF', 'Best Peanut Butter in town', 'homemade peanut butter', 'https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Peanut-Butter-in-a-Glass-Jar-with-Bread-480x270.jpg', '/product-details/3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orderproducts_orderId` (`orderId`),
  ADD KEY `fk_orderproducts_productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_categoryId` (`categoryId`),
  ADD KEY `fk_product_brandId` (`brandId`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orderproducts`
--
ALTER TABLE `orderproducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderproducts`
--
ALTER TABLE `orderproducts`
  ADD CONSTRAINT `fk_orderproducts_orderId` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orderproducts_productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_brandId` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_product_categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
