-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: chalo_dev
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_admin`
--

LOCK TABLES `tbl_admin` WRITE;
/*!40000 ALTER TABLE `tbl_admin` DISABLE KEYS */;
INSERT INTO `tbl_admin` VALUES (1,'super','admin','sa','ok123','ok@chalo.com','8989898989',1,'2020-09-05 11:32:43',0),(2,'super','admin','sa','ok123','ok@chalo.com','8989898989',1,'2020-09-08 18:54:52',0),(3,'super','admin','admin','okchalo','ok@Chalo.com','9867546789',NULL,'2020-09-16 13:07:50',NULL),(4,'super','admin','sadmin','okchalo','ok@Chalo.com','9087563412',1,'2020-09-16 13:34:09',NULL),(5,'super','admin','sa','ok123','ok@Chalo.com','9087563412',1,'2020-09-16 13:39:42',0),(6,'Okchalo','admin','okchalo','123','superadmin@okchalo.com','8756435678',1,'2020-09-30 07:05:08',0);
/*!40000 ALTER TABLE `tbl_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_blood_group`
--

DROP TABLE IF EXISTS `tbl_blood_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_blood_group` (
  `blood_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `blood_group` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`blood_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_blood_group`
--

LOCK TABLES `tbl_blood_group` WRITE;
/*!40000 ALTER TABLE `tbl_blood_group` DISABLE KEYS */;
INSERT INTO `tbl_blood_group` VALUES (1,'A positive (A+)'),(2,'A negative (A-)'),(3,'B positive (B+)'),(4,'B negative (B-)'),(5,'A1 positive (A1+)'),(6,'O positive (O+)'),(7,'O negative (O-)'),(8,'AB positive (AB+)'),(9,'AB Negative (AB-)'),(10,'A1 negative (A1-)');
/*!40000 ALTER TABLE `tbl_blood_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_brands`
--

DROP TABLE IF EXISTS `tbl_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_brands` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_brands`
--

LOCK TABLES `tbl_brands` WRITE;
/*!40000 ALTER TABLE `tbl_brands` DISABLE KEYS */;
INSERT INTO `tbl_brands` VALUES (1,'Tata Motors'),(2,'Bajaji Motors'),(3,'Honda'),(4,'Mahindra '),(5,'TVS Auto'),(6,'Atul Auto');
/*!40000 ALTER TABLE `tbl_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_customers`
--

DROP TABLE IF EXISTS `tbl_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_customers` (
  `customer_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'This is a customer table used for users registration and login purpose. ',
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL COMMENT 'accepts only indain number',
  `passcode` varchar(10) DEFAULT NULL,
  `salt` varchar(200) DEFAULT NULL,
  `hash` varchar(250) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `date_of_birth` varchar(45) DEFAULT NULL,
  `emergency_contact` varchar(15) DEFAULT NULL,
  `blood_group_id` varchar(45) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `registered_date` datetime DEFAULT NULL,
  `activation_status` tinyint(1) DEFAULT NULL,
  `last_active_date` varchar(45) DEFAULT NULL,
  `default_range` int(11) DEFAULT NULL,
  `last_pin_changed` datetime DEFAULT NULL,
  `profile_picture` varchar(150) DEFAULT NULL COMMENT 'the image name is stored\n',
  `blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_customers`
--

LOCK TABLES `tbl_customers` WRITE;
/*!40000 ALTER TABLE `tbl_customers` DISABLE KEYS */;
INSERT INTO `tbl_customers` VALUES (2,'Arjun','Doss','999999999',NULL,NULL,NULL,'M',NULL,NULL,'1',1,'Chennai',1,'2020-09-10 14:23:21',NULL,NULL,1000,NULL,NULL,NULL),(3,'Hari','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,'1',1,'Chennai',1,'2020-09-14 06:03:08',NULL,NULL,1000,NULL,NULL,NULL),(4,'Hari','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Kanchipuram',1,'2020-09-14 11:58:16',NULL,NULL,1000,NULL,NULL,NULL),(5,NULL,NULL,'9159092472',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 12:06:04',NULL,NULL,1000,NULL,NULL,NULL),(6,NULL,NULL,'9600036780',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:01:05',NULL,NULL,1000,NULL,NULL,NULL),(7,'Bamini','Priya','9840653588',NULL,NULL,NULL,'F',NULL,NULL,NULL,NULL,'Chennai',1,'2020-09-14 14:03:00',NULL,NULL,1000,NULL,NULL,NULL),(8,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:10:41',NULL,NULL,1000,NULL,NULL,NULL),(9,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:15:19',NULL,NULL,1000,NULL,NULL,NULL),(10,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:15:29',NULL,NULL,1000,NULL,NULL,NULL),(11,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:17:27',NULL,NULL,1000,NULL,NULL,NULL),(12,NULL,NULL,'9159092472',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:23:26',NULL,NULL,1000,NULL,NULL,NULL),(13,'Hari','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Kanchipuram',1,'2020-09-14 14:24:11',NULL,NULL,1000,NULL,NULL,NULL),(14,NULL,NULL,'9159092472',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 14:44:51',NULL,NULL,1000,NULL,NULL,NULL),(15,'Hari','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',2,'2020-09-14 14:45:54',NULL,NULL,1000,NULL,NULL,NULL),(16,'Krishna','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Bangalore',2,'2020-09-25 15:14:07',NULL,NULL,1000,NULL,NULL,NULL),(17,'Hari','V','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',2,'2020-09-27 16:58:23',NULL,NULL,1000,NULL,NULL,NULL),(18,'Harish','Kumar','9159092472',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Bangalore',2,'2020-09-27 17:42:51',NULL,NULL,1000,NULL,NULL,NULL),(19,'Ramesh','Kumar','1122334455',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',2,'2020-09-27 18:16:31',NULL,NULL,1000,NULL,NULL,NULL),(20,'Rajesh','Venkatesan','1122334466',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Kanchipuram',2,'2020-09-27 18:19:12',NULL,NULL,1000,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_drivers`
--

DROP TABLE IF EXISTS `tbl_drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_drivers` (
  `driver_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'This is a driver table used for users registration and login purpose. ',
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL COMMENT 'accepts only indain number',
  `passcode` varchar(10) DEFAULT NULL,
  `salt` varchar(200) DEFAULT NULL,
  `hash` varchar(45) DEFAULT NULL,
  `gender` varchar(1) DEFAULT NULL,
  `date_of_birth` varchar(45) DEFAULT NULL,
  `emergency_contact` varchar(15) DEFAULT NULL,
  `blood_group_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `registered_date` datetime DEFAULT NULL,
  `activation_status` tinyint(1) DEFAULT NULL,
  `last_active_date` varchar(45) DEFAULT NULL,
  `default_range` int(11) DEFAULT NULL COMMENT 'radius in meeters',
  `last_pin_changed` varchar(45) DEFAULT NULL,
  `driver_picture` varchar(150) DEFAULT NULL COMMENT 'stores the uploaded image name',
  `blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_drivers`
--

LOCK TABLES `tbl_drivers` WRITE;
/*!40000 ALTER TABLE `tbl_drivers` DISABLE KEYS */;
INSERT INTO `tbl_drivers` VALUES (3,'Driver Arjun','D','4567345671',NULL,NULL,NULL,'M',NULL,NULL,1,1,'Chennai',1,'2020-09-10 14:29:51',NULL,NULL,1000,NULL,NULL,NULL),(4,NULL,NULL,'9159092472',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-09-14 06:06:38',NULL,NULL,1000,NULL,NULL,NULL),(5,'Driver Raj','V','9087563412',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',NULL,'2020-09-15 05:44:56',NULL,NULL,1000,NULL,NULL,NULL),(6,'Driver Arun','D','9159092472',NULL,NULL,NULL,'M',NULL,NULL,1,1,'Chennai',1,'2020-09-18 12:03:24',NULL,NULL,1000,NULL,NULL,NULL),(7,'Raj','driver','8798765456',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',NULL,'2020-09-18 13:37:55',NULL,NULL,1000,NULL,NULL,NULL),(8,'Selvam','D','8976543245',NULL,NULL,NULL,'M',NULL,NULL,5,NULL,'Chennai',3,'2020-09-23 12:59:46',NULL,NULL,1000,NULL,NULL,NULL),(9,'Silvaster','Antony','+919789847651',NULL,NULL,NULL,'M',NULL,NULL,NULL,NULL,'Chennai',NULL,'2020-09-25 15:21:36',NULL,NULL,1000,NULL,NULL,NULL),(10,'Vinoth','M','8756435678',NULL,NULL,NULL,'M',NULL,NULL,1,NULL,'Chennai',2,'2020-09-25 15:32:55',NULL,NULL,1000,NULL,NULL,NULL),(11,'Mani','M','8765678945',NULL,NULL,NULL,'M',NULL,NULL,2,NULL,'Chennai',3,'2020-09-26 11:14:38',NULL,NULL,1000,NULL,NULL,NULL),(12,'Raja','V','7896578906',NULL,NULL,NULL,'M',NULL,NULL,1,NULL,'Chennai',1,'2020-09-26 11:19:12',NULL,NULL,1000,NULL,NULL,NULL),(13,'Ravi','S','8976547890',NULL,NULL,NULL,'M',NULL,NULL,2,NULL,'Chennai',3,'2020-09-26 11:24:46',NULL,NULL,1000,NULL,NULL,NULL),(14,'chalo','','8976789087',NULL,NULL,NULL,'M',NULL,NULL,1,NULL,'Chennai',3,'2020-09-28 10:56:05',NULL,NULL,1000,NULL,NULL,NULL),(15,'Sundar','S','8976578907',NULL,NULL,NULL,'M',NULL,NULL,2,NULL,'Chennai',3,'2020-09-28 11:03:00',NULL,NULL,1000,NULL,NULL,NULL),(16,'Jegan','s','7865478934',NULL,NULL,NULL,'M',NULL,NULL,3,NULL,'Chennai',2,'2020-09-28 11:06:25',NULL,NULL,1000,NULL,NULL,NULL),(17,'Mano','M','9856478345',NULL,NULL,NULL,'M',NULL,NULL,1,NULL,'Chennai',1,'2020-09-28 11:14:42',NULL,NULL,1000,NULL,NULL,NULL),(18,'Kumar','D','6547895432',NULL,NULL,NULL,'M',NULL,NULL,3,NULL,'Chennai',2,'2020-09-28 11:19:37',NULL,NULL,1000,NULL,NULL,NULL),(19,'Mathi','M','5674567894',NULL,NULL,NULL,'M',NULL,NULL,4,NULL,'Chennai',2,'2020-10-01 12:33:02',NULL,NULL,1000,NULL,NULL,NULL),(20,'Velan','D','567854567',NULL,NULL,NULL,'M',NULL,NULL,1,NULL,'Chennai',2,'2020-10-01 12:43:38',NULL,NULL,1000,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_languages`
--

DROP TABLE IF EXISTS `tbl_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_languages` (
  `language_id` int(11) NOT NULL AUTO_INCREMENT,
  `language` varchar(100) NOT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`language_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_languages`
--

LOCK TABLES `tbl_languages` WRITE;
/*!40000 ALTER TABLE `tbl_languages` DISABLE KEYS */;
INSERT INTO `tbl_languages` VALUES (1,'English - En',1),(2,'Hindi - Hi',1),(3,'Tamil tn',0),(4,'Marathi',0),(5,'Telugu - TE',1),(6,'Bengali',0),(7,'Test',0),(8,'Gujarati',0),(9,'Test1',0),(10,'Malayalam mn',0);
/*!40000 ALTER TABLE `tbl_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_models`
--

DROP TABLE IF EXISTS `tbl_models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_models` (
  `model_id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(45) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`model_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_models`
--

LOCK TABLES `tbl_models` WRITE;
/*!40000 ALTER TABLE `tbl_models` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_otp`
--

DROP TABLE IF EXISTS `tbl_otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_otp` (
  `otp_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(1) DEFAULT NULL,
  `mobile_number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `otp` varchar(10) DEFAULT NULL,
  `sent_timestamp` datetime DEFAULT NULL,
  `expired` tinyint(4) DEFAULT '0',
  `verified` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`otp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_otp`
--

LOCK TABLES `tbl_otp` WRITE;
/*!40000 ALTER TABLE `tbl_otp` DISABLE KEYS */;
INSERT INTO `tbl_otp` VALUES (6,'C','8888855555','1234','2020-09-10 14:01:28',0,1),(7,'C','9159092472','1234','2020-09-14 06:10:35',0,NULL),(8,'C','8888855555','1234','2020-09-14 07:58:11',0,0),(9,'C','9159092472','1234','2020-09-14 10:33:55',0,0),(10,'C','9159092472','1234','2020-09-14 11:58:16',0,0),(11,'D','9159092472','1234','2020-09-14 12:06:04',0,0),(12,'C','','1234','2020-09-14 12:21:54',0,0),(13,'D','9159092472','1234','2020-09-14 13:55:12',0,0),(14,'C','9159092472','1234','2020-09-14 13:55:31',0,0),(15,'C','','1234','2020-09-14 13:55:44',0,0),(16,'D','9840653588','1234','2020-09-14 13:58:32',0,0),(17,'D','9840653588','1234','2020-09-14 13:59:50',0,0),(18,'D','','1234','2020-09-14 14:00:07',0,0),(19,'D','9600036780','1234','2020-09-14 14:01:05',0,0),(20,'C','9840653588','1234','2020-09-14 14:03:00',0,0),(21,'C','','1234','2020-09-14 14:07:17',0,0),(22,'C','','1234','2020-09-14 14:07:29',0,0),(23,'D','','1234','2020-09-14 14:07:53',0,0),(24,'D','','1234','2020-09-14 14:10:42',0,0),(25,'D','','1234','2020-09-14 14:11:01',0,0),(26,'C','','1234','2020-09-14 14:11:21',0,0),(27,'D','','1234','2020-09-14 14:12:14',0,0),(28,'D','','1234','2020-09-14 14:15:01',0,0),(29,'D','','1234','2020-09-14 14:15:19',0,0),(30,'D','','1234','2020-09-14 14:15:29',0,0),(31,'C','','1234','2020-09-14 14:15:52',0,0),(32,'D','','1234','2020-09-14 14:17:19',0,0),(33,'D','','1234','2020-09-14 14:17:27',0,0),(34,'C','','1234','2020-09-14 14:17:41',0,0),(35,'C','','1234','2020-09-14 14:17:54',0,0),(36,'D','9159092472','1234','2020-09-14 14:23:07',0,0),(37,'D','9159092472','1234','2020-09-14 14:23:26',0,0),(38,'C','9159092472','1234','2020-09-14 14:23:41',0,0),(39,'C','9159092472','1234','2020-09-14 14:24:11',0,0),(40,'D','','1234','2020-09-14 14:30:49',0,0),(41,'D','983396328','1234','2020-09-14 14:31:30',0,0),(42,'C','983396328','1234','2020-09-14 14:34:18',0,0),(43,'D','9159092472','1234','2020-09-14 14:42:34',0,0),(44,'D','9159092472','1234','2020-09-14 14:44:51',0,0),(45,'C','9159092472','1234','2020-09-14 14:45:54',0,0),(46,'D','9159092472','1234','2020-09-14 14:47:12',0,0),(47,'C','9159092472','1234','2020-09-14 14:56:52',0,0),(48,'D','','1234','2020-09-14 15:52:18',0,0),(49,'D','9833969328','1234','2020-09-14 16:52:53',0,0),(50,'C','9833969328','1234','2020-09-14 16:53:24',0,0),(51,'C','','1234','2020-09-15 04:53:23',0,0),(52,'C','9944007890','1234','2020-09-15 04:53:32',0,0),(53,'D','','1234','2020-09-17 04:45:50',0,0),(54,'C','','1234','2020-09-17 05:14:20',0,0),(55,'D','9159092472','1234','2020-09-17 05:16:06',0,0),(56,'D','9159092472','1234','2020-09-17 05:17:08',0,0),(57,'D','9159092472','1234','2020-09-17 05:21:34',0,0),(58,'D','9159092472','1234','2020-09-17 07:49:30',0,0),(59,'C','9159092472','1234','2020-09-17 13:10:15',0,0),(60,'C','9159092472','1234','2020-09-17 13:11:15',0,0),(61,'C','','1234','2020-09-17 13:12:11',0,0),(62,'C','9159092472','1234','2020-09-21 15:53:11',0,0),(63,'C','9159092472','1234','2020-09-21 16:10:15',0,0),(64,'C','9159092472','1234','2020-09-21 16:37:26',0,0),(65,'C','','1234','2020-09-21 16:44:34',0,0),(66,'C','9159092472','1234','2020-09-21 16:44:41',0,0),(67,'C','9159092472','1234','2020-09-21 16:46:07',0,0),(68,'C','9159092472','1234','2020-09-21 17:24:00',0,0),(69,'C','9159092472','1234','2020-09-22 03:25:28',0,0),(70,'C','9159092472','1234','2020-09-22 03:25:54',0,0),(71,'C','9159092472','1234','2020-09-22 03:27:35',0,0),(72,'C','9159092472','1234','2020-09-22 11:01:19',0,0),(73,'D','9159092472','1234','2020-09-22 11:43:21',0,0),(74,'C','9159092472','1234','2020-09-22 12:19:23',0,0),(75,'D','9159092472','1234','2020-09-22 12:19:37',0,0),(76,'C','9159092472','1234','2020-09-22 13:43:55',0,0),(77,'D','9159092472','1234','2020-09-22 13:57:29',0,0),(78,'C','9159092472','1234','2020-09-22 14:13:56',0,0),(79,'D','9159092472','1234','2020-09-22 16:05:30',0,0),(80,'C','9159092472','1234','2020-09-22 16:09:17',0,0),(81,'D','9159092472','1234','2020-09-22 16:09:23',0,0),(82,'C','9159092472','1234','2020-09-22 16:27:23',0,0),(83,'D','9159092472','1234','2020-09-22 16:29:56',0,0),(84,'D','9159092472','1234','2020-09-23 03:48:39',0,0),(85,'D','9159888888','1234','2020-09-23 03:50:11',0,0),(86,'C','9159092472','1234','2020-09-23 05:50:04',0,0),(87,'D','','1234','2020-09-23 05:54:24',0,0),(88,'C','9159092472','1234','2020-09-25 08:31:06',0,0),(89,'C','9159092472','1234','2020-09-25 08:31:48',0,0),(90,'C','9159092472','1234','2020-09-25 08:33:08',0,0),(91,'C','9159092472','1234','2020-09-25 08:39:16',0,0),(92,'C','9159092472','1234','2020-09-25 15:13:48',0,0),(93,'D','9159092472','1234','2020-09-27 16:58:13',0,0),(94,'D','9159092472','1234','2020-09-27 17:42:36',0,0),(95,'C','1122334455','1234','2020-09-27 18:16:29',0,0),(96,'C','1122334466','1234','2020-09-27 18:19:00',0,0);
/*!40000 ALTER TABLE `tbl_otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_rides`
--

DROP TABLE IF EXISTS `tbl_rides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_rides` (
  `ride_id` int(11) NOT NULL AUTO_INCREMENT,
  `otp` int(5) DEFAULT 0,
  `requested_datetime` datetime DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `pickup_address` varchar(250) DEFAULT NULL,
  `pickup_gps` varchar(45) DEFAULT NULL,
  `drop_address` varchar(250) DEFAULT NULL,
  `drop_gps` varchar(45) DEFAULT NULL,
  `ride_start_time` datetime DEFAULT NULL,
  `ride_end_time` datetime DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `booking_number` varchar(45) DEFAULT NULL,
  `pickup_lat` varchar(45) DEFAULT NULL,
  `pickup_lng` varchar(45) DEFAULT NULL,
  `drop_lat` varchar(45) DEFAULT NULL,
  `drop_lng` varchar(45) DEFAULT NULL,
  `tip` int(3) DEFAULT NULL,
  `is_passenger_accept` tinyint(1) DEFAULT 0,
  `confirm_otp` int(5) DEFAULT 0
  PRIMARY KEY (`ride_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_rides`
--

LOCK TABLES `tbl_rides` WRITE;
/*!40000 ALTER TABLE `tbl_rides` DISABLE KEYS */;
INSERT INTO `tbl_rides` VALUES (1,'2020-09-17 05:11:43',1,'My 2nd pickup address','13.027699, 80.185762','my 2nd drop address','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(2,'2020-09-17 05:31:49',2,'Chennai Pickup address','13.027699, 80.185762','Chennai Drop address','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(3,'2020-09-18 06:43:01',2,'Adyar chennai','13.003387, 80.255043','Tambaram chennai','12.922915, 80.127457',NULL,NULL,2,1,'BN-3',NULL,NULL,NULL,NULL),(4,'2020-09-18 11:40:48',2,'Pickup location','13.027699, 80.185762','Drop Location','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(5,'2020-09-18 12:10:42',3,'Madras Thiruvallur High Rd, Chennai, Tamil Nadu','13.027699, 80.185762','MAC Nagar, Poonamallee, Chennai, Tamil Nadu 600056','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(6,'2020-09-18 12:53:46',3,'Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560068','13.027699, 80.185762','Apollo Cradle - Best Maternity Hospital, Gynaecologist, Neonatologist, Paediatric, Child Specialist, Birth Centre in Koramangala, Bangalore, 18th Main Road, 58, Pipe Line Rd, near Anand Sweets, 6th Block, Koramangala, Bengaluru, Karnataka 560095','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(7,'2020-09-18 13:06:00',3,'Apollo Cradle - Best Maternity Hospital, Gynaecologist, Neonatologist, Paediatric, Child Specialist, Birth Centre in Koramangala, Bangalore, 18th Main Road, 58, Pipe Line Rd, near Anand Sweets, 6th Block, Koramangala, Bengaluru, Karnataka 560095','13.027699, 80.185762','Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560068','13.061831, 80.161024',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(8,'2020-09-18 15:07:14',3,'Silk board, Bangalore, Karanataka.','13.027699, 80.185762','Marathalli, White field, Bangalore, Karnataka','13.061831, 80.161024',NULL,NULL,2,6,'BN-8',NULL,NULL,NULL,NULL),(9,'2020-09-22 04:05:36',3,'tin fa','12.996993, 77.66903099999999','silkbo','12.9169429, 77.621934',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(10,'2020-09-22 04:44:41',3,'','12.9794048, 77.6208384','Tin Factory, Madras Bombay Trunk Rd, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016, India','12.996522, 77.6690815',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(11,'2020-09-22 11:43:05',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819805, 77.6702063','Tin Factory, Swami Vivekananda Rd, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016, India','12.996993, 77.66903099999999',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(12,'2020-09-22 12:19:30',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819872, 77.6701602','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-12',NULL,NULL,NULL,NULL),(13,'2020-09-22 13:44:04',3,'BLOCK A, D Bhaskaran Rd, Hermit Colony, Sivanchetti Gardens, Halasuru, Karnataka 560042, India','12.9794048, 77.6208384','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(14,'2020-09-22 13:57:19',3,'BLOCK A, D Bhaskaran Rd, Hermit Colony, Sivanchetti Gardens, Halasuru, Karnataka 560042, India','12.9794048, 77.6208384','Tin Factory, Swami Vivekananda Rd, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016, India','12.996993, 77.66903099999999',NULL,NULL,2,3,'BN-14',NULL,NULL,NULL,NULL),(15,'2020-09-22 16:06:23',3,'Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','undefined, undefined','Tin Factory, Swami Vivekananda Rd, Krishna Reddy Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016, India','12.996993, 77.66903099999999',NULL,NULL,2,3,'BN-15',NULL,NULL,NULL,NULL),(16,'2020-09-22 16:27:43',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8820369, 77.6702165','Bhel, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100, India','12.8452145, 77.6601695',NULL,NULL,2,3,'BN-16',NULL,NULL,NULL,NULL),(17,'2020-09-22 17:05:43',3,'No 140, 33rd Cross, 7th Main Rd, near Hotel Maiyas, 4th Block, Jayanagar, Bengaluru, Karnataka 560011, India','12.926489218957764, 77.58167194483643','Bengaluru,, Bellandur, Bengaluru, Karnataka 560103, India','12.925869, 77.675358',NULL,NULL,2,3,'BN-17',NULL,NULL,NULL,NULL),(18,'2020-09-22 17:09:08',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819805, 77.6702063','Immadihalli Main Rd, Sathya Sai Layout, Whitefield, Bengaluru, Karnataka 560066, India','12.9698196, 77.7499721',NULL,NULL,2,3,'BN-18',NULL,NULL,NULL,NULL),(19,'2020-09-24 08:41:23',3,'1141, 21st A Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India','12.910744881011626, 77.64096506591798','Tin Factory, Madras Bombay Trunk Rd, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016, India','12.996522, 77.6690815',NULL,NULL,2,3,'BN-19',NULL,NULL,NULL,NULL),(20,'2020-09-24 12:47:58',3,'743, 15th Cross Rd, KPC Layout, Kasavanahalli, Karnataka 560035, India','12.9007616, 77.6798208','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-20',NULL,NULL,NULL,NULL),(21,'2020-09-24 13:18:47',3,'743, 15th Cross Rd, KPC Layout, Kasavanahalli, Karnataka 560035, India','12.9007616, 77.6798208','Swami Narendra Laxury Gents PG, #78/5, Sri Gowri Krishna Arcade, above Domino\'s pizza, Bellandur, Bengaluru, Karnataka 560103, India','12.9262006, 77.6761145',NULL,NULL,2,3,'BN-21',NULL,NULL,NULL,NULL),(22,'2020-09-24 13:20:17',3,'743, 15th Cross Rd, KPC Layout, Kasavanahalli, Karnataka 560035, India','12.9007616, 77.6798208','Swami Narendra Laxury Gents PG, #78/5, Sri Gowri Krishna Arcade, above Domino\'s pizza, Bellandur, Bengaluru, Karnataka 560103, India','12.9262006, 77.6761145',NULL,NULL,2,3,'BN-22',NULL,NULL,NULL,NULL),(23,'2020-09-24 18:59:37',3,'743, 15th Cross Rd, KPC Layout, Kasavanahalli, Karnataka 560035, India','12.9007616, 77.6798208','Swami Narendra Laxury Gents PG, #78/5, Sri Gowri Krishna Arcade, above Domino\'s pizza, Bellandur, Bengaluru, Karnataka 560103, India','12.9262006, 77.6761145',NULL,NULL,2,3,'BN-23',NULL,NULL,NULL,NULL),(24,'2020-09-25 09:36:36',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881885899999999, 77.6701866','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-24',NULL,NULL,NULL,NULL),(25,'2020-09-25 10:30:29',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819714, 77.6701621','Bhel, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100, India','12.8452145, 77.6601695',NULL,NULL,2,3,'BN-25',NULL,NULL,NULL,NULL),(26,'2020-09-25 10:34:01',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819714, 77.6701621','Unnamed Road, Gulimangala, Bengaluru, Karnataka 560099, India','12.8581406, 77.7065754',NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL),(27,'2020-09-25 10:37:29',3,'54, 100 Feet Rd, Ejipura, Bengaluru, Karnataka 560095, India','12.94336, 77.6404992','Swami Narendra Laxury Gents PG, #78/5, Sri Gowri Krishna Arcade, above Domino\'s pizza, Bellandur, Bengaluru, Karnataka 560103, India','12.9262006, 77.6761145',NULL,NULL,2,3,'BN-27',NULL,NULL,NULL,NULL),(28,'2020-09-25 12:50:36',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881951599999999, 77.6701609','2376, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India','12.9121181, 77.6445548',NULL,NULL,2,3,'BN-28','12.881951599999999','77.6701609','12.9121181','77.6445548'),(29,'2020-09-25 12:55:15',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881922999999999, 77.6701671','92/2, 5th Cross Rd, Indra Nagar, Shabhari Nagar, Bengaluru, Karnataka 560092, India','13.0698281, 77.58960549999999',NULL,NULL,2,3,'BN-29','12.881922999999999','77.6701671','13.0698281','77.58960549999999'),(30,'2020-09-25 12:58:47',3,'54, 100 Feet Rd, Ejipura, Bengaluru, Karnataka 560095, India','12.94336, 77.6404992','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-30','12.94336','77.6404992','12.9169429','77.621934'),(31,'2020-09-25 13:01:00',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819726, 77.670204','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-31','12.8819726','77.670204','12.9169429','77.621934'),(32,'2020-09-25 13:04:43',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881951599999999, 77.6701609','Tin Factory, Madras Bombay Trunk Rd, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016, India','12.996522, 77.6690815',NULL,NULL,2,3,'BN-32','12.881951599999999','77.6701609','12.996522','77.6690815'),(33,'2020-09-25 13:10:26',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819834, 77.6701609','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-33','12.8819834','77.6701609','12.9169429','77.621934'),(34,'2020-09-25 13:13:19',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819834, 77.6701609','Tin Factory, Madras Bombay Trunk Rd, Pai Layout, Mahadevapura, Bengaluru, Karnataka 560016, India','12.996522, 77.6690815',NULL,NULL,2,3,'BN-34','12.8819834','77.6701609','12.996522','77.6690815'),(35,'2020-09-25 13:14:21',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881951599999999, 77.6701609','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-35','12.881951599999999','77.6701609','12.9169429','77.621934'),(36,'2020-09-25 13:16:07',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881951599999999, 77.6701609','Immadihalli Main Rd, Sathya Sai Layout, Whitefield, Bengaluru, Karnataka 560066, India','12.9698196, 77.7499721',NULL,NULL,2,3,'BN-36','12.881951599999999','77.6701609','12.9698196','77.7499721'),(37,'2020-09-25 13:18:55',3,'54, 100 Feet Rd, Ejipura, Bengaluru, Karnataka 560095, India','12.94336, 77.6404992','Marathalli Bridge, Subbaiah Reddy Colony, Lakshminarayana Pura, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037, India','12.956924, 77.701127',NULL,NULL,2,3,'BN-37','12.94336','77.6404992','12.956924','77.701127'),(38,'2020-09-25 13:21:22',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881969999999999, 77.6701254','492, near ICICI Bank Ltd, Indiranagar, Bengaluru, Karnataka 560038, India','12.9783692, 77.6408356',NULL,NULL,2,3,'BN-38','12.881969999999999','77.6701254','12.9783692','77.6408356'),(39,'2020-09-25 13:27:54',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881969999999999, 77.6701254','Gokul Krishna,, Hosa Rd, near Aishwarya super market, IAS Layout, Eastwood Twp, Kasavanahalli, Karnataka 560035, India','12.9053223, 77.67587739999999',NULL,NULL,2,3,'BN-39','12.881969999999999','77.6701254','12.9053223','77.67587739999999'),(40,'2020-09-25 13:29:49',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819878, 77.6701389','Gokul Krishna,, Hosa Rd, near Aishwarya super market, IAS Layout, Eastwood Twp, Kasavanahalli, Karnataka 560035, India','12.9053223, 77.67587739999999',NULL,NULL,1,NULL,NULL,'12.8819878','77.6701389','12.9053223','77.67587739999999'),(41,'2020-09-25 13:30:33',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819878, 77.6701389','Gokul Krishna,, Hosa Rd, near Aishwarya super market, IAS Layout, Eastwood Twp, Kasavanahalli, Karnataka 560035, India','12.9053223, 77.67587739999999',NULL,NULL,2,18,'BN-41','12.8819878','77.6701389','12.9053223','77.67587739999999'),(42,'2020-09-25 13:32:07',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.8819878, 77.6701389','Gokul Krishna,, Hosa Rd, near Aishwarya super market, IAS Layout, Eastwood Twp, Kasavanahalli, Karnataka 560035, India','12.9053223, 77.67587739999999',NULL,NULL,2,NULL,'BN-42','12.8819878','77.6701389','12.9053223','77.67587739999999'),(43,'2020-09-25 14:52:29',3,'439, 17th Cross Road, Sector 4, HSR Layout, Bengaluru, Karnataka 560102, India','12.9120692524078, 77.64341222519532','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,1,NULL,NULL,'12.9120692524078','77.64341222519532','12.9169429','77.621934'),(44,'2020-09-25 15:15:40',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881930100000002, 77.6701684','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,2,3,'BN-44','12.881930100000002','77.6701684','12.9169429','77.621934'),(45,'2020-09-25 15:23:12',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881962500000002, 77.6701661','Bhel, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100, India','12.8452145, 77.6601695',NULL,NULL,2,3,'BN-45','12.881962500000002','77.6701661','12.8452145','77.6601695'),(46,'2020-09-25 15:25:56',3,'71-72,Sai baba layout, 2nd Main 6th Cross Rd, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560100, India','12.881942, 77.6702066','Bhel, Electronics City Phase 1, Electronic City, Bengaluru, Karnataka 560100, India','12.8452145, 77.6601695',NULL,NULL,2,3,'BN-46','12.881942','77.6702066','12.8452145','77.6601695'),(47,'2020-09-27 18:06:46',3,'7, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100, India','12.848132355187918, 77.65883204912107','Central Silk Board, Central Silk Board Colony, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068, India','12.9169429, 77.621934',NULL,NULL,1,NULL,NULL,'12.848132355187918','77.65883204912107','12.9169429','77.621934');
/*!40000 ALTER TABLE `tbl_rides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_roles`
--

DROP TABLE IF EXISTS `tbl_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_roles`
--

LOCK TABLES `tbl_roles` WRITE;
/*!40000 ALTER TABLE `tbl_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_status`
--

DROP TABLE IF EXISTS `tbl_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_status`
--

LOCK TABLES `tbl_status` WRITE;
/*!40000 ALTER TABLE `tbl_status` DISABLE KEYS */;
INSERT INTO `tbl_status` VALUES (1,'Requested'),(2,'Confirmed'),(3,'Cancelled'),(4,'Rejected'),(5,'Started'),(6,'On Ride'),(7,'Completed');
/*!40000 ALTER TABLE `tbl_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vehicle_type`
--

DROP TABLE IF EXISTS `tbl_vehicle_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_vehicle_type` (
  `vehicle_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`vehicle_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicle_type`
--

LOCK TABLES `tbl_vehicle_type` WRITE;
/*!40000 ALTER TABLE `tbl_vehicle_type` DISABLE KEYS */;
INSERT INTO `tbl_vehicle_type` VALUES (1,'Car'),(2,'Auto'),(3,'Van');
/*!40000 ALTER TABLE `tbl_vehicle_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_vehicles`
--

DROP TABLE IF EXISTS `tbl_vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_vehicles` (
  `vehicle_id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicle_type_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `vehicle_registration_number` varchar(45) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_vehicles`
--

LOCK TABLES `tbl_vehicles` WRITE;
/*!40000 ALTER TABLE `tbl_vehicles` DISABLE KEYS */;
INSERT INTO `tbl_vehicles` VALUES (1,1,8,'TN10HK5678',4,0),(2,NULL,NULL,'',NULL,0),(3,NULL,12,'',NULL,0),(4,2,13,'TN10HK345',3,0),(5,2,14,'TN10HK765',3,0),(6,1,15,'TN10HK476',4,0),(7,2,15,'TN10HK245',3,0),(8,2,16,'TN10HK108',3,0),(9,1,16,'TN10HK564',4,0),(10,2,17,'TN10HK001',3,0),(11,2,18,'TN10HK002',3,0),(12,1,7,'TN13HK457',4,0);
/*!40000 ALTER TABLE `tbl_vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;




--
-- Table structure for table `tbl_token`
--

DROP TABLE IF EXISTS `tbl_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `token` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_admin`
--



--
-- Table structure for table `tbl_webpush`
--

DROP TABLE IF EXISTS `tbl_webpush`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_webpush` (
  `webpush_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `endpoint` varchar(1000) DEFAULT NULL,
  `expirationTime` varchar(100) DEFAULT NULL,
  `p256dh` varchar(1000) DEFAULT NULL,
  `auth` varchar(500) DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL, 
  PRIMARY KEY (`webpush_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19  7:50:22
