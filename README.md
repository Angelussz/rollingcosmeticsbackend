# Rolling Cosmetics
Backend tienda E-commerce de venta de cosmeticos  realizada por los estudiantes de la comisión 80i - Tutores: Alan Chibilisco y Valentin Quiroga, integrantes:
* Angelo Perez
* Facundo Palacios
* Juan Illa
El proyectos se trabajo en español y la rama develop se uso como rama de pruebas y la rama main como rama principal a producción
## Tecnologias usadas
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
## EndPoints
### Usuario
* `POST API/usuarios/login`,busca si existe un usuario y contraseña igual al pedido que se le hace.
* `POST API/usuarios/crear-admin`: Crea un administrador si este es otro administrado.
* `POST API/usuarios/`: crea un usuario.
* `GET API/usuarios?rol=YYYY&busqueda=BBBBBBBB`, devuelve todos los usuarios, opcionalmente se puede agregar dos queries (rol y busqueda), esto tambien solo puede hacerlo un administrador validando su información
* `UPDATE API/usuarios/update/`, sirve para actualizar un usuario, tambien esto solo lo puede hacer un administrador
*  `DELETE API/usuarios/update/`, sirve para eliminar un usuario, tambien esto solo lo puede hacer un administrador
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
