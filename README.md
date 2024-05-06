# Rolling Cosmetics
Backend tienda E-commerce de venta de cosmeticos  realizada por los estudiantes de la comisión 80i - Tutores: Alan Chibilisco y Valentin Quiroga, integrantes:
* Angelo Perez
* Facundo Palacios
* Juan Illa
El proyectos se trabajo en español y la rama develop se uso como rama de pruebas y la rama main como rama principal a producción
## Tecnologias usadas
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS-563d7c?&style=flat&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Static Badge](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Static Badge](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
## EndPoints
### Usuario
* Para loguearse, POST `API/usuarios/login`: 
Regresa:
```
{
	nombre,
	email.
	rol,
	token
}
```
* Para crear un admin, POST `API/usuarios/crear-admin`: ***se debe autenticar como administrador***
Regresa:
```
{
	nombre,
	apellido.
	clave,
	rol,
	_id
}
```
* Para crear un usuario, POST `API/usuarios/`: regresa los valores acontinuación.
Regresa:
```
{
	nombre,
	apellido.
	clave,
	rol,
	_id
}
```
* Para obtener todos los usuarios, GET `API/usuarios?rol=YYYY&busqueda=BBBBBBBB`, se puede colocar querys de rol y busqueda, el rol buscara con el tipo de rol a ingresar y busqueda por nombre o apellido coincidente,<span style="color:red">se debe autenticar como administrador</span>
Regresa:
```
[
	{
	nombre,
	apellido.
	clave,
	rol,
	_id
},
{
	nombre,
	apellido.
	clave,
	rol,
	_id
},
{
	nombre,
	apellido.
	clave,
	rol,
	_id
},
.
.
.
.
.
.
]
```
* Para eliminar usuario, DELETE `API/usuarios/delete/`, <span style="color:red">se debe autenticar como administrador</span>
Regresa:
```
{
	mensaje: "Exito al eliminar usuario"
}
```
* Para actulizar un usuario, DELETE `API/usuarios/update/`, solo actuliza el nombre y/o apellido, aun se esta viendo como se puede actualizar correo y clave de forma segura, tambien se necesita header de autorización con token:
Ingreso
```
{
	nombre,
	apellido,
	clave,
}
```
Regresa:
```
{
	mensaje: "Exito al eliminar usuario"
}
```
## Producto
* Para crear nuevo producto, POST `API/productos`: 
Regresa:
```
{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
}
```
* Para obtener todos los productos, GET `API/productos/`:
Regresa:
```
[
	{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
},
{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
},
{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
},
.
.
.
.
.
.
]
```
* Para obtener un producto, GET `API/productos/:id`:
Regresa:
```
{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
}
```
* Para editar un producto, PUT `API/productos/actualizar`:
Ingreso
```
{
	_id,
	nombre,
	stock,
	precio,
	descripcion,
	imagen,
	categoria,
	marca
}
```
Regresa:
```
{
	mensaje: "Exito al actualizar el producto"
}
```
* Para eliminar un producto, DELETE `API/productos/:id`:
Regresa:
```
{
	mensaje: "Exito al eliminar el producto
}
```