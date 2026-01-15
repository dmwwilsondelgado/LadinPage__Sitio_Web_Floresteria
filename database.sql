create user "wilsondelgado"@"localhost" identified by "1102717619";
create database bb_cacao_chucureño;
grant all privileges on bb_cacao_chucureño.* to "wilsondelgado"@"localhost";
flush privileges;
show databases;
use bb_cacao_chucureño;
-- creacion de tablas
create table roles(
id_rol int primary key,
nombre_rol varchar(50)
);
create table usuarios(
id_usuario int auto_increment primary key,
nombre varchar(100) not null,
email varchar(100)not null unique,
password varchar(100)not null,
telefono varchar(20),
estado tinyint default 1,
fecha_creacion timestamp default current_timestamp
);

CREATE TABLE usuario_rol (
  id_usuario INT,
  id_rol INT,
  PRIMARY KEY (id_usuario, id_rol),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE tipo_producto (
  id_tipo_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT
);

CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  estado TINYINT DEFAULT 1,
  id_categoria INT,
  id_tipo_producto INT,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
  FOREIGN KEY (id_tipo_producto) REFERENCES tipo_producto(id_tipo_producto)
);
CREATE TABLE imagenes_producto (
  id_imagen INT AUTO_INCREMENT PRIMARY KEY,
  id_producto INT,
  url_imagen VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE direcciones (
  id_direccion INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  direccion VARCHAR(200) NOT NULL,
  ciudad VARCHAR(100),
  departamento VARCHAR(100),
  referencia VARCHAR(200),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
CREATE TABLE carrito (
  id_carrito INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  estado VARCHAR(20) DEFAULT 'activo',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
CREATE TABLE carrito_detalle (
  id_detalle INT AUTO_INCREMENT PRIMARY KEY,
  id_carrito INT,
  id_producto INT,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_carrito) REFERENCES carrito(id_carrito),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE pedidos (
  id_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_direccion INT,
  total DECIMAL(10,2) NOT NULL,
  estado VARCHAR(30) DEFAULT 'pendiente',
  fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_direccion) REFERENCES direcciones(id_direccion)
);
CREATE TABLE pedido_detalle (
  id_detalle INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT,
  id_producto INT,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE pagos (
  id_pago INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT,
  metodo_pago VARCHAR(50),
  estado_pago VARCHAR(30),
  fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

create user "wilsondelgado"@"localhost" identified by "1102717619";
create database bb_cacao_chucureño;
grant all privileges on bb_cacao_chucureño.* to "wilsondelgado"@"localhost";
flush privileges;
show databases;
use bb_cacao_chucureño;
-- creacion de tablas
create table roles(
id_rol int primary key,
nombre_rol varchar(50)
);
create table usuarios(
id_usuario int auto_increment primary key,
nombre varchar(100) not null,
email varchar(100)not null unique,
password varchar(100)not null,
telefono varchar(20),
estado tinyint default 1,
fecha_creacion timestamp default current_timestamp
);

CREATE TABLE usuario_rol (
  id_usuario INT,
  id_rol INT,
  PRIMARY KEY (id_usuario, id_rol),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE tipo_producto (
  id_tipo_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT
);

CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  estado TINYINT DEFAULT 1,
  id_categoria INT,
  id_tipo_producto INT,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
  FOREIGN KEY (id_tipo_producto) REFERENCES tipo_producto(id_tipo_producto)
);
CREATE TABLE imagenes_producto (
  id_imagen INT AUTO_INCREMENT PRIMARY KEY,
  id_producto INT,
  url_imagen VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE direcciones (
  id_direccion INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  direccion VARCHAR(200) NOT NULL,
  ciudad VARCHAR(100),
  departamento VARCHAR(100),
  referencia VARCHAR(200),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
CREATE TABLE carrito (
  id_carrito INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  estado VARCHAR(20) DEFAULT 'activo',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
CREATE TABLE carrito_detalle (
  id_detalle INT AUTO_INCREMENT PRIMARY KEY,
  id_carrito INT,
  id_producto INT,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_carrito) REFERENCES carrito(id_carrito),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE pedidos (
  id_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_direccion INT,
  total DECIMAL(10,2) NOT NULL,
  estado VARCHAR(30) DEFAULT 'pendiente',
  fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_direccion) REFERENCES direcciones(id_direccion)
);
CREATE TABLE pedido_detalle (
  id_detalle INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT,
  id_producto INT,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
CREATE TABLE pagos (
  id_pago INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT,
  metodo_pago VARCHAR(50),
  estado_pago VARCHAR(30),
  fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

-- insertacion de datos
insert into roles(id_rol,nombre_rol)values(1,"admin"),(2,"cliente");
insert into usuarios(nombre,email,password,telefono)values("Wilson","wilsondelgadomoreno",1102717619,"3184423997");
describe usuarios;
select * from usuarios;
select * from roles;
select 1,"Wilson","wilsondelgadomoreno" from usuarios;
-- agregamos que tipo de usuario va a hacer 
insert into usuario_rol(id_usuario,id_rol)values(1,1); -- agregamos al admin 
describe usuarios;
