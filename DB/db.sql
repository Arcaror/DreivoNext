-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.29 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour predictor
CREATE DATABASE IF NOT EXISTS `predictor` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `predictor`;

-- Listage de la structure de table predictor. accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_account_id` varchar(255) NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `expires_at` int DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `id_token` varchar(1200) DEFAULT NULL,
  `session_state` varchar(255) DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.accounts : ~1 rows (environ)
INSERT INTO `accounts` (`id`, `type`, `provider`, `provider_account_id`, `refresh_token`, `access_token`, `expires_at`, `token_type`, `scope`, `id_token`, `session_state`, `user_id`) VALUES
	('6cb694d1-10b0-4c9e-a9be-124d6afd24e4', 'oauth', 'twitch', '408415297', '5hpw264bg5ny03yg5aegtjd42sbouqqwdd759ybtuzjlqoe88s', 'eqvnh5pqztd2yh5y2s7e4jyb7de2kk', 1661363368, 'bearer', 'openid user:read:email', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEifQ.eyJhdWQiOiJjMHM1NDMwcTltcnJ6eGQ1bDd2YnFidzd1d3ZucTEiLCJleHAiOjE2NjEzNDk0MjksImlhdCI6MTY2MTM0ODUyOSwiaXNzIjoiaHR0cHM6Ly9pZC50d2l0Y2gudHYvb2F1dGgyIiwic3ViIjoiNDA4NDE1Mjk3IiwiZW1haWwiOiJsZWdyYW5kYXJjYXJvckBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC91c2VyLWRlZmF1bHQtcGljdHVyZXMtdXYvNDE3ODBiNWEtZGVmOC0xMWU5LTk0ZDktNzg0ZjQzODIyZTgwLXByb2ZpbGVfaW1hZ2UtMTUweDE1MC5wbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJvbWVnYXNsb3cifQ.AlEw0tAoWHBROVnXOHt2E2onwhZymVHotY-G2qlVySKO1ahpW1dbwHZBmiva-QdHo_t3p_aysKKFQHXAW0j8yg1DpfVDPEPug5_PWYk74A7BjJHn-9XFGIhA5ZRnpktKV_xcMWDR8T8AOTyFXFW4EdspuqHBWUv_JabE2LlC18XigEFi0j5N2yyccQ3oK_r6w6tkvj1GrUrSVpwoh48x-3wYj8UyEvQ50c74ltxtN-X6AjlRqFyowOgNxAB3WRYMy87-JZ7fkg3ogrKyfwgs9zL0Gkc2AzqIHwb8MKiEuTYIYA8RUht6lhkm5olWRg8IH5pRstvH8E245iY8XQqEKQ', NULL, '9b5acf0b-097a-46d7-a4a0-c09567b884da');

-- Listage de la structure de table predictor. participations
CREATE TABLE IF NOT EXISTS `participations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  `prediId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.participations : ~1 rows (environ)
INSERT INTO `participations` (`id`, `userId`, `name`, `response`, `prediId`, `createdAt`, `updatedAt`) VALUES
	(128, '9b5acf0b-097a-46d7-a4a0-c09567b884da', 'omegaslow', 'yes', '345', '2022-09-17 14:53:56', '2022-09-17 14:53:56');

-- Listage de la structure de table predictor. predictions
CREATE TABLE IF NOT EXISTS `predictions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `end` int DEFAULT '0',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=346 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.predictions : ~1 rows (environ)
INSERT INTO `predictions` (`id`, `name`, `end`, `createdAt`, `updatedAt`) VALUES
	(1, 'first', 0, '2022-08-18 00:56:36', '2022-08-17 23:10:11');

-- Listage de la structure de table predictor. sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` datetime NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sessionToken` (`session_token`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.sessions : ~1 rows (environ)
INSERT INTO `sessions` (`id`, `expires`, `session_token`, `user_id`) VALUES
	('013a52c7-b6d1-4e99-96a8-4d4a5e8382de', '2022-10-17 15:00:26', 'b20c98c8-ad99-4e7e-9bf6-71fb859f9292', '9b5acf0b-097a-46d7-a4a0-c09567b884da');

-- Listage de la structure de table predictor. users
CREATE TABLE IF NOT EXISTS `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emailVerified` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `winstreak` int DEFAULT '0',
  `isAdmin` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.users : ~1 rows (environ)
INSERT INTO `users` (`id`, `name`, `email`, `emailVerified`, `image`, `winstreak`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
	('9b5acf0b-097a-46d7-a4a0-c09567b884da', 'omegaslow', 'legrandarcaror@gmail.com', NULL, 'https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-150x150.png', 17, 1, NULL, '2022-09-17 14:54:02');

-- Listage de la structure de table predictor. verification_tokens
CREATE TABLE IF NOT EXISTS `verification_tokens` (
  `token` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `expires` datetime NOT NULL,
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.verification_tokens : ~0 rows (environ)

-- Listage de la structure de table predictor. winners
CREATE TABLE IF NOT EXISTS `winners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(250) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `winstreak` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Index 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table predictor.winners : ~1 rows (environ)
INSERT INTO `winners` (`id`, `userId`, `name`, `winstreak`, `createdAt`, `updatedAt`) VALUES
	(1, '1', 'firstguy', 6, '2022-08-24 16:04:39', '2022-08-24 16:04:39');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
