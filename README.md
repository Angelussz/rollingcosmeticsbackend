# Rolling Cosmetics
* Se trabajara en español
* No tocar la rama prinicpal (main) todos se debe trabajar en ramas separadas y mergear en la rama develop
## Producto
- id
- nombre
- stock
- precio
- descripción
- imagen
- categoría
- marca
## Usuarios
- id
- Nombre
- Apellidos
- email
- contraseña
# Estructura de carpetas
	rollingcosmeticsbackend/
	├── src
	│   ├── controladores
	│   │   ├── ControladorProduto.js
	│   │   └── ControladorUsuario.js
    │	│   ├── modelos
    │	│   │   ├── ModeloProducto.js
	│   │   └── ModeloUsuario.js
	│   ├── rutas
    │   │   ├── RutaProducto.js
	│   │   └── RutaUusuario.js
    │   ├── utilidades
    │   │   ├── AuthMiddlewares.js
    │   │   ├── FuncionesAuxiliares.js
	│   │   └── FuncionesAuxiliares.js
    │   ├── ConexionBaseDatos.js
	│   ├── index.js
    ├── .env
    ├── .envexamples
    ├── .gitignore
	├── .gitignore
	└── README.md
# EndPoints
## Usuario
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
* Para crear un admin, POST `API/usuarios/crear-admin`: <span style="color:red">se debe autenticar como administrador</span>
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