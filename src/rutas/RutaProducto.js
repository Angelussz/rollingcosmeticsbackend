const ControladorProducto = require('../controladores/ControladorProducto');
const Auth = require("../utilidades/AuthMiddlewares");

const RutaProducto = (base, app)=>{
    const controlador = new ControladorProducto();

    app.post(`${base}/`, Auth.esAutorizado, Auth.esAdmin, async(req, res, next)=>{
        try {
            const {nombre, stock, precio, descripcion, imagen, categoria, marca}=req.body;
            await controlador.Crear(nombre, stock, precio, descripcion, imagen, categoria, marca);
            return res.status(201).json({message:"Exito al crear el producto"})
        } catch (error) {
            console.error("Error al crear un producto --> ", error);
            return res.status(500).json({message:"Ocurrio un error al intentar crear un nuevo producto"});
        }
    });

    app.get(`${base}/`, async(req, res)=>{
        try {
            const {filtro, busqueda,limite} = req.query;
            const response = await controlador.ObtenerProductos(filtro, busqueda,limite);
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error al obtener todos los productos --> ", error);
            return res.status(500).json({message:"Ocurrio un error al intentar obtener los productos"});
        }
    });

    app.get(`${base}/:id`, async(req, res)=>{
        try {
            const {id} = req.params;
            const respuesta = await controlador.ObtenerPorId(id);
            return res.status(200).json(respuesta);
        } catch (error) {
            console.error(`Error al obtener el producto con id: ${id} -->`, error);
            return res.status(500).json({message:"Ocurrio un error al intentar obtener el producto"});
        }
    });

    app.put(`${base}/actualizar`, Auth.esAutorizado, Auth.esAdmin, async(req, res)=>{
        try {
            const producto = req.body;
            await controlador.ActualizarProducto(producto);
            return res.status(200).json({message:"Exito al actualizar el producto"});
        } catch (error) {
            console.error("Error al actualizar un producto --> ", error);
            return res.status(500).json({massage:"Ocurrio un error al intentar actualizar el producto"});
        }
    })

    app.delete(`${base}/:id`, Auth.esAutorizado, Auth.esAdmin, async(req, res)=>{
        try {
            const {id}=req.params;
            await controlador.BorrarProducto(id);
            return res.status(200).json({message:"Exito al eliminar el producto"});
        } catch (error) {
            console.error("Error al eliminar un producto --> ", error);
            return res.status(500).json({message:"Ocurrio un error al intentar eliminar el producto"});
        }
    })
}

module.exports = RutaProducto;