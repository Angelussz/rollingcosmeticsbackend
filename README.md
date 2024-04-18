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
* Para loguearse, POST `API/usuarios/login`: regresa:
```
{
	nombre,
	email.
	rol,
	token
}
```
* Para crear un admin, POST `API/usuarios/crear-admin`: <span style="color:red">se debe autenticar como administrador</span>
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
```
{
	mensaje: "Exito al eliminar usuario"
}
```