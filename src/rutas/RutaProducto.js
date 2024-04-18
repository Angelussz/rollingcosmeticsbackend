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
    })
}

module.exports = RutaProducto;