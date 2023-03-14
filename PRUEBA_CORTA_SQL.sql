CREATE TABLE DEPARTAMENTO (
    codigo_departmaento CHAR(4) NOT NULL,
    nombre_departamento varchar(64)
  PRIMARY KEY (codigo_departmaento)
);


CREATE TABLE MUNICIPIO (
    codigo_municipio CHAR(2) NOT NULL,
    nombre_municipio varchar(64),
	codigo_departmaento CHAR(4) NOT NULL,
  PRIMARY KEY (codigo_municipio),
      FOREIGN KEY (codigo_departmaento) REFERENCES DEPARTAMENTO(codigo_departmaento)
);

CREATE TABLE TIPO_PRODUCTO (
    id_tipo_producto INT NOT NULL,
    nombre_tipo_producto nvarchar(128)
  PRIMARY KEY (id_tipo_producto)
);

CREATE TABLE PRODUCTO (
    id_producto INT NOT NULL,
    nombre_producto nvarchar(128),
	id_tipo_producto INT,
 FOREIGN KEY (id_tipo_producto) REFERENCES TIPO_PRODUCTO(id_tipo_producto),
 PRIMARY KEY (id_tipo_producto)
);