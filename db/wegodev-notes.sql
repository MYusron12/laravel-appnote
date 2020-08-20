-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2020 at 02:05 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wegodev-notes`
--
CREATE DATABASE IF NOT EXISTS `wegodev-notes` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `wegodev-notes`;

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

CREATE TABLE `note` (
  `id` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `note`
--

INSERT INTO `note` (`id`, `title`, `description`) VALUES
(1, 'Materi Vue JS', 'Aplikasi Wegodev Notes ini adalah materi pertama studi kasus vuejs, pada materi ini kita akan belajar vuejs dari awal dan fokus pada pembahasan component dan komunikasi antar components'),
(2, 'Super user wegodev', 'Super user adalah user yang dapat mengakses kontent studi kasus yang ada di web wegodev dan bertanya ke pengajar'),
(3, 'Jadi super user', 'Untuk menjadi super user kamu bisa daftar melalui wegodev.com/access.html');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `note`
--
ALTER TABLE `note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
