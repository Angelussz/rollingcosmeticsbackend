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
