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
('lautaro.poggi@gmail.com', 'poggi456', '2005-09-13', 46938863, '/images/users/poggi.png'),
('portalautaro@gmail.com', 'porta789', '2004-06-30', 47222333, '/images/users/porta.png'),
('luis@gmail.com', 'luis000', '1997-03-21', 43111222, '/images/users/luis.jpg'),
('srudesa@gmail.com', 'srudesa321', '2000-08-18', 45123456, '/images/users/srudesa.jpg');

INSERT INTO productos (usuario_id, imagen, nombre, descripcion) VALUES
(1, 'edge-40-neo.png', 'Motorola Edge 40 Neo', 'Pantalla fluida y diseño liviano'),
(2, 'google-pixel-6.png', 'Google Pixel 6', 'Android puro y excelente cámara'),
(3, 'huawei-p40-pro.png', 'Huawei P40 Pro', 'Hardware excelente, pero sin servicios de Google'),
(4, 'iphone_se.png', 'iPhone SE', 'Compacto pero potente, ideal para usuarios básicos'),
(5, 'iphone-15-pro.png', 'iPhone 15 Pro', 'Rendimiento increíble y nuevo diseño'),
(2, 'one-plus-nord-2.png', 'OnePlus Nord 2', 'Rápido, moderno y accesible'),
(1, 'realme-gt-master.png', 'Realme GT Master', 'Gran rendimiento y estética premium'),
(6, 'redmi-13-pro-plus.png', 'Redmi 13 Pro Plus', 'Excelente batería y cámara de alta gama'),
(4, 's24-ultra.png', 'Samsung Galaxy S24 Ultra', 'La cámara más poderosa y el rendimiento más veloz de Samsung'),
(3, 'samsung-galaxy-a52.png', 'Samsung Galaxy A52', 'Buen balance entre precio y calidad');

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
(4, 1, 'Ideal para alguien que quiere algo simple pero potente.'),
(4, 3, 'Muy cómodo para el uso diario.');
(5, 2, 'Gran diseño y rendimiento impecable.'),
(5, 5, 'La cámara es increíble, vale cada peso.');
(6, 4, 'Rápido y con buen diseño, muy recomendable.'),
(6, 6, 'Perfecto para juegos y multitarea.');
(7, 3, 'Lindo diseño y fluido para el precio.'),
(7, 1, 'Realme me sorprendió, buen rendimiento.');
(8, 5, 'Batería que dura todo el día, excelente.'),
(8, 2, 'Muy buena cámara, sobre todo de noche.');
(9, 6, 'El zoom de la cámara es de otro planeta.'),
(9, 4, 'Samsung se pasó con este modelo.');
(10, 1, 'Buen rendimiento por el precio.'),
(10, 3, 'Ideal para estudiantes y uso general.');




