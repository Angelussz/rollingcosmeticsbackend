const ModeloProducto = require('../modelos/ModeloProducto');
const validador = require('../utilidades/Validadores');

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
}

module.exports = ControladorProducto;