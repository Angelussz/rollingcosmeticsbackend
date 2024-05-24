const ModeloProducto = require('../modelos/ModeloProducto');
const validador = require('../utilidades/validadores');

class ControladorProducto{
    async Crear(nombre, stock, precio, descripcion, imagen, categoria, marca, fecha){
        try {
            if(!validador.validarNombre(nombre) || !validador.validarStock(stock) || !validador.validarPrecio(precio) || !validador.validarDescripcion(descripcion) || !validador.validarImagen(imagen) || !validador.validarCategoria(categoria) || !validador.validarMarca(marca) || !validador.validarFecha(fecha) ){
                throw new Error("Error en alguno de los campos");
            }
            console.log("valido correctamente");

            const producto = new ModeloProducto({
                nombre: nombre,
                stock: stock,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
                categoria: categoria,
                marca: marca,
                fecha: fecha
            });

            await producto.save();
        } catch (error) {
            throw error;
        }
    }

    async ObtenerProductos(filtro, busqueda,limite=null){
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
            respuestaFinal = await ModeloProducto.find(consulta,null,{limit:limite});
            return respuestaFinal;
        } catch (error) {
            throw error;
        }
    }

    async ObtenerPorId(id){
        try {
            const producto = await ModeloProducto.findById(id);
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async ActualizarProducto(producto){
        try {
            await ModeloProducto.findByIdAndUpdate(producto._id, producto);
        } catch (error) {
            throw error;
        }
    }

    async BorrarProducto(id){
        try {
            await ModeloProducto.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ControladorProducto;