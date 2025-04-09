CREATE SCHEMA IF NOT EXISTS integrador;

USE integrador;

CREATE TABLE usuarios(
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(500) NOT NULL,
    contraseña VARCHAR(500) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    documento INT UNSIGNED NOT NULL,
    foto_perfil VARCHAR(500),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP


); 


CREATE TABLE productos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	usuario_id INT UNSIGNED NOT NULL,
	imagen VARCHAR(500) NOT NULL,
	nombre VARCHAR(500) NOT NULL,
	descripcion TEXT,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
CREATE TABLE comentarios(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  producto_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  texto TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (producto_id) REFERENCES productos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)


);
INSERT INTO usuarios (email, contraseña, fecha_nacimiento, documento, foto_perfil)
VALUES 
('brian@gmail.com', 'brian123', '2001-04-12', 46000111, '/images/users/brian.png'),
('jonnyboca@gmail.com', 'boca123', '1998-12-05', 45322110, '/images/users/jonny.png'),
('lautaro.poggi@gmail.com', 'poggi456', '2005-09-13', 46938863, '/images/users/lautaro.png'),
('portalautaro@gmail.com', 'porta789', '2004-06-30', 47222333, '/images/users/porta.png'),
('luis@gmail.com', 'luis000', '1997-03-21', 43111222, '/images/users/luis.jpg'),
('srudesa@gmail.com', 'srudesa321', '2000-08-18', 45123456, '/images/users/srudesa.jpg');

INSERT INTO productos (usuario_id, imagen, nombre, descripcion) VALUES
(1, 's24-ultra.png', 'Samsung Galaxy S24 Ultra', 'La cámara más poderosa y el rendimiento más veloz de Samsung'),
(2, 'galaxys22.jpg', 'Samsung Galaxy S22', 'Pantalla Dynamic AMOLED de 6.1 pulgadas'),
(3, 'redmi11.jpg', 'Xiaomi Redmi Note 11', 'Gran batería y buen rendimiento por su precio'),
(4, 'motoedge30.jpg', 'Motorola Edge 30', 'Diseño moderno y pantalla fluida'),
(5, 'iphonese.jpg', 'iPhone SE', 'Compacto pero potente, ideal para usuarios básicos'),
(2, 'a52.jpg', 'Samsung A52', 'Buen balance entre precio y calidad'),
(1, 'pixel6.jpg', 'Google Pixel 6', 'Android puro y excelente cámara'),
(6, 'realmegt.jpg', 'Realme GT Master', 'Estética moderna y gran rendimiento'),
(4, 'p40pro.jpg', 'Huawei P40 Pro', 'Hardware excelente, pero sin servicios de Google'),
(3, 'nord2.jpg', 'OnePlus Nord 2', 'Rendimiento rápido y buena cámara');

INSERT INTO comentarios (producto_id, usuario_id, texto) VALUES
(1, 2, 'Excelente cámara y duración de batería.'),
(1, 3, 'Muy buen teléfono para trabajar.'),
(1, 4, 'Samsung siempre cumple.'),
(2, 1, 'Diseño compacto y elegante.'),
(2, 5, 'Se siente rápido y fluido.'),
(2, 6, 'Contento con la compra.'),
(3, 4, 'Muy buena relación precio-calidad.'),
(3, 2, 'Ideal para quien no quiere gastar mucho.'),
(3, 1, 'Perfecto como primer celular.');





