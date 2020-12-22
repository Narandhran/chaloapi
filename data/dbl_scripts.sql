

/*24-Sep-2020 */

ALTER TABLE `chalo_dev`.`tbl_rides` 
ADD COLUMN `pickup_lat` VARCHAR(45) NULL AFTER `booking_number`,
ADD COLUMN `pickup_lng` VARCHAR(45) NULL AFTER `pickup_lat`,
ADD COLUMN `drop_lat` VARCHAR(45) NULL AFTER `pickup_lng`,
ADD COLUMN `drop_lng` VARCHAR(45) NULL AFTER `drop_lat`;


USE `chalo_dev`;
DROP function IF EXISTS `lat_lng_distance`;

DELIMITER $$
USE `chalo_dev`$$
CREATE DEFINER=`root`@`localhost` FUNCTION `lat_lng_distance`(lat1 FLOAT, lng1 FLOAT, lat2 FLOAT, lng2 FLOAT) RETURNS float
    DETERMINISTIC
BEGIN
        RETURN 6371 * 2 * ASIN(SQRT(
            POWER(SIN((lat1 - abs(lat2)) * pi()/180 / 2),
            2) + COS(lat1 * pi()/180 ) * COS(abs(lat2) *
            pi()/180) * POWER(SIN((lng1 - lng2) *
            pi()/180 / 2), 2) ));
    END$$
b
DELIMITER ;

/* To see the list of functions in a database */

SELECT 
    routine_name
FROM
    information_schema.routines
WHERE
    routine_type = 'FUNCTION'
        AND routine_schema = 'chalo_dev';



CREATE TABLE `tbl_vehicle_type` (
  `vehicle_type_id` int NOT NULL AUTO_INCREMENT,
  `vehicle_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`vehicle_type_id`)
) ENGINE=InnoDB;



INSERT INTO `chalo_dev`.`tbl_vehicle_type`
(`vehicle_type`)
VALUES
('Car'),('Auto'),('Van');


CREATE TABLE `tbl_vehicles` (
  `vehicle_id` int NOT NULL AUTO_INCREMENT,
  `vehicle_type_id` int DEFAULT NULL,
  `driver_id` int DEFAULT NULL,
  `vehicle_registration_number` varchar(45) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `active` tinyint DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB;


//27-Oct-2020

ALTER TABLE `chalo_dev`.`tbl_rides` 
ADD COLUMN `confirm_otp` VARCHAR(8) NULL AFTER `drop_lng`;

ALTER TABLE `chalo_dev`.`tbl_rides` 
ADD COLUMN `otp_verified` TINYINT NULL AFTER `confirm_otp`;

