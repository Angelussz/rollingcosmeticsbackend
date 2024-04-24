const ModeloProducto = require('../modelos/ModeloProducto');
const validador = require('../utilidades/validadores');

class ControladorProducto{
    async Crear(nombre, stock, precio, descripcion, imagen, categoria, marca){
        try {
            if(!validador.validarNombre(nombre) || !validador.validarStock(stock) || !validador.validarPrecio(precio) || !validador.validarDescripcion(descripcion) || !validador.validarImagen(imagen) || !validador.validarCategoria(categoria) || !validador.validarMarca(marca)){
                throw new Error("Error en alguno de los campos");
            }

            const producto = new ModeloProducto({
                nombre: nombre,
                stock: stock,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
                categoria: categoria,
                marca: marca
            });

            await producto.save();
        } catch (error) {
            throw error;
        }
    }

    async ObtenerProductos(filtro, busqueda){
        try {
            let respuestaFinal = [];
            let consulta ={};

            if(filtro !== undefined){
                consulta["categoria"] = filtro;
            };

            if(busqueda !== undefined){
                consulta["nombre"]={$regex: busqueda, $options:"i"};
            }

            /*if(filtro === undefined){
                respuestaFinal = await ModeloProducto.find();
            } else{
                respuestaFinal = await ModeloProducto.find({
                    categoria: filtro
                });
            }*/

            // return respuestaFinal;
            return respuestaFinal = await ModeloProducto.find(consulta);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ControladorProducto;