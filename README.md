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
* `POST API/usuarios/crear-admin`: Crea un administrador,**solo lo puede hacer un administrador**.
* `POST API/usuarios/login`,busca si existe un email y contraseña igual al pedido que se le hace.
* `GET API/usuarios`, devuelve todos los usuarios, opcionalmente se puede aceptar dos queries (rol y busqueda),**solo lo puede hacer un administrador**.
* `POST API/usuarios/`: crea un usuario.
* `UPDATE API/usuarios/update/`, sirve para actualizar un usuario, **solo lo puede hacer un administrador**.
*  `DELETE API/usuarios/:id`, sirve para eliminar un usuario,**solo lo puede hacer un administrador**.
### Producto
* `POST API/productos`, para crear nuevo producto,**solo lo puede hacer un administrador**:
* `GET API/productos/`, para obtener todos los productos, adicionalmente se puede agregar querys de filtro(categoria) y busqueda(palabras incluidas) y limites(limite de la cantidad de poductos que se va traer):
* `GET API/productos/:id`, para obtener un producto por el id:
* `PUT API/productos/actualizar`, para editar un producto,**solo lo puede hacer un administrador**:
* `DELETE API/productos/:id`, para eliminar un producto,**solo lo puede hacer un administrador**:
