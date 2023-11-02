-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-10-2023 a las 01:26:53
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adidas`
--
CREATE DATABASE IF NOT EXISTS `adidas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `adidas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_de_la_tienda`
--

CREATE TABLE `clientes_de_la_tienda` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `domicilio` varchar(30) NOT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  `provincia` varchar(20) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes_de_la_tienda`
--
ALTER TABLE `clientes_de_la_tienda`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes_de_la_tienda`
--
ALTER TABLE `clientes_de_la_tienda`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT;
--
-- Base de datos: `biblioteca`
--
CREATE DATABASE IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `biblioteca`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_clientes`
--

CREATE TABLE `t_clientes` (
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `dni` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `t_clientes`
--

INSERT INTO `t_clientes` (`nombre`, `apellido`, `direccion`, `ciudad`, `estado`, `id_cliente`, `dni`) VALUES
('Lucas', 'escudero', 'marmol', 'bsas', 'merlo', 5, 12345678),
('Yasmin', 'De leon', 'treintaytre', 'liberticity', 'merlo', 6, 463758096);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_libros`
--

CREATE TABLE `t_libros` (
  `titulo` varchar(50) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `precio` int(11) NOT NULL,
  `id_libros` int(11) NOT NULL,
  `fecha_retiro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_retiro`
--

CREATE TABLE `t_retiro` (
  `id_cliente` int(11) NOT NULL,
  `id_libros` int(11) NOT NULL,
  `id_retiro` int(11) NOT NULL,
  `fecha_retiro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `t_clientes`
--
ALTER TABLE `t_clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `t_libros`
--
ALTER TABLE `t_libros`
  ADD PRIMARY KEY (`id_libros`);

--
-- Indices de la tabla `t_retiro`
--
ALTER TABLE `t_retiro`
  ADD PRIMARY KEY (`id_retiro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `t_clientes`
--
ALTER TABLE `t_clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `t_libros`
--
ALTER TABLE `t_libros`
  MODIFY `id_libros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Base de datos: `coca_cola`
--
CREATE DATABASE IF NOT EXISTS `coca_cola` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `coca_cola`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_de_coca`
--

CREATE TABLE `clientes_de_coca` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `domicilio` varchar(30) DEFAULT NULL,
  `ciudad` varchar(20) DEFAULT NULL,
  `codigoprovincia` int(11) DEFAULT NULL,
  `telefono` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes_de_coca`
--

INSERT INTO `clientes_de_coca` (`codigo`, `nombre`, `domicilio`, `ciudad`, `codigoprovincia`, `telefono`) VALUES
(1, 'Lopez Marcos', 'Colon 111', 'Cordoba', 1, '4578585'),
(2, 'Perez Liz', 'San Martin 222', 'Cruz del Eje', 1, '4578445'),
(3, 'Garcia Juan', 'Rivadavia 111', 'Villa Maria', 1, '4578585'),
(4, 'Pereyra Pablo', 'Sarmiento 234', 'Rosario', 2, '457844544'),
(5, 'Gomez Claudio', 'San Martin 123', 'Cruz del Eje', 1, '457844543'),
(6, 'Torres Rebecca', 'San Martin 666', 'Cruz del Eje', 2, '0235252525'),
(7, 'Acuña Carlos', 'Alem 777', 'Villa del Rosario', 1, '457844543'),
(8, 'Ramos Diego', 'San Martin 101', 'Cruz del Eje', 1, '45699920'),
(9, 'Carnero Lucas', 'San Martin 1010', 'Posadas', 4, '046428739');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`codigo`, `nombre`) VALUES
(1, 'Cordoba'),
(2, 'Santa Fe'),
(3, 'Corrientes'),
(4, 'Misiones'),
(5, 'Salta'),
(6, 'Buenos Aires'),
(7, 'Neuquen');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes_de_coca`
--
ALTER TABLE `clientes_de_coca`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes_de_coca`
--
ALTER TABLE `clientes_de_coca`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Base de datos: `empleados`
--
CREATE DATABASE IF NOT EXISTS `empleados` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `empleados`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`) VALUES
(1, 'Kevin'),
(2, 'Julian'),
(3, 'Lucas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Base de datos: `escuela`
--
CREATE DATABASE IF NOT EXISTS `escuela` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `escuela`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `codigoCurso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `mail`, `codigoCurso`) VALUES
(1, 'Lucas', 'flucayoel@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Base de datos: `gestiónclínicadb`
--
CREATE DATABASE IF NOT EXISTS `gestiónclínicadb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `gestiónclínicadb`;
--
-- Base de datos: `gimnasio`
--
CREATE DATABASE IF NOT EXISTS `gimnasio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `gimnasio`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id_equipos` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `id_foreng` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinas`
--

CREATE TABLE `maquinas` (
  `id` int(11) NOT NULL,
  `ubicacion` varchar(20) NOT NULL,
  `clientes` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `maquinas`
--

INSERT INTO `maquinas` (`id`, `ubicacion`, `clientes`) VALUES
(1, 'BuenosAires', 'Alan'),
(3, 'Libertad', 'Alana'),
(5, 'Merlo', 'Lisa'),
(7, 'Moron', 'Olmo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membresia`
--

CREATE TABLE `membresia` (
  `id_usuario` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `id_segunda` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id_equipos`),
  ADD KEY `id_foreng` (`id_foreng`);

--
-- Indices de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `membresia`
--
ALTER TABLE `membresia`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_segunda` (`id_segunda`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD CONSTRAINT `equipos_ibfk_1` FOREIGN KEY (`id_foreng`) REFERENCES `membresia` (`id_usuario`);

--
-- Filtros para la tabla `membresia`
--
ALTER TABLE `membresia`
  ADD CONSTRAINT `membresia_ibfk_1` FOREIGN KEY (`id_segunda`) REFERENCES `maquinas` (`id`);
--
-- Base de datos: `hospitaldb`
--
CREATE DATABASE IF NOT EXISTS `hospitaldb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `hospitaldb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `medico_asignado` varchar(50) DEFAULT NULL,
  `diagnostico` varchar(700) DEFAULT NULL,
  `quirofano` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `nombre`, `apellido`, `medico_asignado`, `diagnostico`, `quirofano`) VALUES
(24, 'Lucas', 'Fernandez', 'Yasmin de leon', 'Gripe', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `rango` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `profesion` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Base de datos: `iac`
--
CREATE DATABASE IF NOT EXISTS `iac` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `iac`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_alumnos_del_curso`
--

CREATE TABLE `t_alumnos_del_curso` (
  `id` int(11) NOT NULL,
  `nombreDelUsuario` varchar(30) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `codigoCurso` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `t_alumnos_del_curso`
--

INSERT INTO `t_alumnos_del_curso` (`id`, `nombreDelUsuario`, `mail`, `codigoCurso`) VALUES
(1, 'Lucas', 'mia@gmail.com', 12),
(2, 'Lucas', 'mia@gmail.co', 1),
(3, 'Lucas', 'efefef@gmail', 1),
(4, 'lucas', 'mia@gmail.com', 1),
(5, 'lucas', 'mia@gmail.co', 1),
(6, 'lucas', 'mia@gmail.com', 1),
(7, 'lucas', 'mia@gmail.com', 1),
(8, 'Lucas', 'efefef@gmail', 1),
(9, 'Lucas', 'mia@gmail.co', 1),
(10, 'Lucas', 'mia@gmail.co', 1),
(11, 'Lucas', 'mia@gmail.co', 1),
(12, 'lucas', 'mia@gmail.com', 1),
(13, 'Lucas', 'mia@gmail.com', 1),
(14, 'Lucas', 'mia@gmail.com', 1),
(15, 'Lucas', 'mia@gmail.com', 1),
(16, 'lucas', 'mia@gmail.com', 1),
(17, 'lucas', 'mia@gmail.co', 1),
(18, 'Lucas', 'mia@gmail.co', 1),
(19, 'Lucas', 'mia@gmail.com', 1),
(20, 'Lucas', 'mia@gmail.com', 1),
(21, 'Lucas', 'mia@gmail.com', 1),
(22, 'Lucas', 'mia@gmail.com', 1),
(23, 'Lucas', 'mia@gmail.com', 1),
(24, 'Lucas', 'mia@gmail.com', 1),
(25, 'Lucas', 'mia@gmail.com', 1),
(26, 'lucas', 'ef@gmail.com', 1),
(27, 'Lucas', 'mia@gmail.com', 1),
(28, 'Lucas', 'efefef@gmail', 1),
(29, 'Lucas', 'mia@gmail.com', 1),
(30, 'lucas', 'mia@gmail.com', 1),
(31, 'Lucas', 'mia@gmail.com', 1),
(32, 'Lucas', 'mia@gmail.com', 1),
(33, 'Lucas', 'mia@gmail.com', 1),
(34, '', '', 0),
(35, 'Lucas', 'mia@gmail.com', 1),
(36, 'Lucas', 'mia@gmail.com', 1),
(37, 'lucas', 'mia@gmail.com', 1),
(38, '', 'mia@gmail.com', 1),
(39, 'Lucas', 'mia@gmail.com', 1),
(40, 'Lucas', 'mia@gmail.com', 1),
(41, 'Lucas', 'mia@gmail.com', 1),
(42, 'Lucas', 'mia@gmail.com', 1),
(43, 'Lucas', 'mia@gmail.com', 1),
(44, 'lucas', 'mia@gmail.co', 1),
(45, 'lucas', 'efefef@gmail', 1),
(46, 'lucas', 'mia@gmail.com', 1),
(47, 'lucas', 'mia@gmail.co', 1),
(48, 'Lucas', 'mia@gmail.co', 1),
(49, 'lucas', '12@gmail', 1),
(50, 'lucas', 'mia@gmail.com', 1),
(51, 'lucas', 'efefef@gmail', 1),
(52, '', 's@gmail.com', 1),
(53, 'PENELOPE', 'juancito@gmail.com', 0),
(54, 'Lucas', '12@gmail', 2),
(55, 'Lucas', 'mia@gmail.co', 0),
(56, 'Lucas', 'mia@gmail.com', 1),
(57, 'yasmin', 'rayas674@gmail.com', 1),
(58, 'lucas', 'rayas674@gmail.com', 1),
(59, 'yasmin', 'rayas674@gmail.com', 1),
(60, 'yasmin', 'rayas674@gmail.com', 1),
(61, 'yasmin', 'ray4@gmail.com', 1),
(62, 'MIA', 'mia678@gmail.com', 1),
(63, 'efe', '12312312@gmail.com', 1),
(64, 'PENELOPE', 'bhfhwb@gmail.com', 1),
(65, 'acuña', 'acunia@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `t_alumnos_del_curso`
--
ALTER TABLE `t_alumnos_del_curso`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `t_alumnos_del_curso`
--
ALTER TABLE `t_alumnos_del_curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- Base de datos: `login_node_jwt`
--
CREATE DATABASE IF NOT EXISTS `login_node_jwt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `login_node_jwt`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `pass` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `name`, `pass`) VALUES
(1, 'Fernandez', 'Lucas', '$2a$08$.cAEJLZ4x/zsB'),
(2, 'juan', 'juancito', '$2a$08$osFq5QxthGtFk'),
(3, 'yas', 'yasmin', '$2a$08$iv8PVoQmZtE7D');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Base de datos: `medicamentos`
--
CREATE DATABASE IF NOT EXISTS `medicamentos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `medicamentos`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pastillas`
--

CREATE TABLE `pastillas` (
  `ID` int(11) NOT NULL,
  `EMPLEADOS` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `pastillas`
--

INSERT INTO `pastillas` (`ID`, `EMPLEADOS`) VALUES
(1, 'juan'),
(2, 'juan'),
(4, 'JUAN');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pastillas`
--
ALTER TABLE `pastillas`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pastillas`
--
ALTER TABLE `pastillas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Base de datos: `senalizatec_db`
--
CREATE DATABASE IF NOT EXISTS `senalizatec_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `senalizatec_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `id_niveles` int(11) NOT NULL,
  `id_usersfk` int(11) NOT NULL,
  `nivel` varchar(70) DEFAULT NULL,
  `lecciones` varchar(50) DEFAULT NULL,
  `modoJuego` varchar(50) DEFAULT NULL,
  `numeroProgreso` int(11) DEFAULT NULL,
  `coloresProgreso` int(11) DEFAULT NULL,
  `familiaProgreso` int(11) DEFAULT NULL,
  `diasMesesProgreso` int(11) DEFAULT NULL,
  `PreguntasBasicasProgreso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`id_niveles`, `id_usersfk`, `nivel`, `lecciones`, `modoJuego`, `numeroProgreso`, `coloresProgreso`, `familiaProgreso`, `diasMesesProgreso`, `PreguntasBasicasProgreso`) VALUES
(1, 1, NULL, NULL, NULL, 0, 0, 0, 0, 0),
(2, 2, '[]', '[15,16]', '[12]', 0, 0, 0, 0, 0),
(3, 6, NULL, NULL, NULL, 0, 0, 0, 0, 0),
(4, 7, NULL, NULL, NULL, 0, 0, 0, 0, 0),
(5, 8, NULL, NULL, NULL, 0, 0, 0, 0, 0),
(6, 9, NULL, NULL, NULL, 0, 0, 0, 0, 0),
(7, 10, NULL, NULL, NULL, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_users` int(11) NOT NULL,
  `user` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_users`, `user`, `email`, `password`) VALUES
(1, 'lucas', 'flucasyoel@gmail.com', '$2b$10$JCLVntal3xsbRa2JIDkuTOD0riPX7ly.9qnBSIr6g6l0a4YwqGVHO'),
(2, 'mia', 'mia@gmail.com', '$2b$10$TGzfAsNnSoo.RZqyiMdHZeeYfmdqxHoCHaaPPuptcRkOOb0EZoIq2'),
(4, 'diego', 'diego@gmail.com', '$2b$10$oN25EnpFYELqyxNuzDYkFuNxMOxfl5talYO1wStnfVbvrMhiHW2mu'),
(5, 'Juancito', 'juancito@gmail.com', '$2b$10$hR3kbd./DqMyQB/doKvc/uredOo2.Ll.4nK6uj75oqR5abXVdOfnO'),
(6, 'perez', 'perez@gmail.com', '$2b$10$.fIFUSQ9FLpSTCClzHRMWOzPInZNxr0K4s586SHCydkzmirHizKjW'),
(7, 'kevin', 'kevin@gmail.com', '$2b$10$Ovy3b.jwQ3kGioku/SCpO.ek1a7MfqCqWbJ0L7EzA0HOAcFzOiSb.'),
(8, 'lucas', 'lucasyoel@gmial.com', '$2b$10$Tbpt/RTXTJDRtu7OqyWUuOXNWJlRLNthnbs/CC8hU7S2mwX3Xke6W'),
(9, 'juan', 'lukitas@gmail.com', '$2b$10$VtZb/zoKx6Km9vjSJE0lB.lPdMc0Qu60gcEC6r2fJL0l5SMKve3lW'),
(10, 'yasmin', 'yas@gmail.com', '$2b$10$Ig0N.EfDzfRR86sG8CpdS.UGD9lPi9ZfGSqdThZ7amWrl2m2cxKP2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`id_niveles`),
  ADD KEY `id_usersfk` (`id_usersfk`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `id_niveles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD CONSTRAINT `niveles_ibfk_1` FOREIGN KEY (`id_usersfk`) REFERENCES `users` (`id_users`);
--
-- Base de datos: `sesiones`
--
CREATE DATABASE IF NOT EXISTS `sesiones` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `sesiones`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
