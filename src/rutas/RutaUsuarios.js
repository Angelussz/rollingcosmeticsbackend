const ControladorUsuario = require("../controladores/ControladorUsuario");
const Auth = require("../utilidades/AuthMiddlewares");
const RutaUsuarios = (base, app) => {
  const controlador = new ControladorUsuario();
  app.post(`${base}/crear-admin`,Auth.esAutorizado,Auth.esAdmin,async (req, res, next) => {
    try {
      const { nombre, email, clave, apellido } = req.body;
      const resp = await controlador.CrearNuevoUsuario(
        nombre,
        apellido,
        email,
        clave,
        "Admin"
      );
      return res.status(201).json(resp);
    } catch (error) {
      console.error("Error al crear un nuevo administrador -->", error);
      // next(error);
      return res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar crear administrador" });
    }
  });
  app.post(`${base}/login`, async (req, res, next) => {
    try {
      const resp = await controlador.Login(req, res);
      return resp;
    } catch (error) {
      next(error);
    }
  });
  app.get(
    `${base}/`,
    Auth.esAutorizado,
    Auth.esAdmin,
    async (req, res, next) => {
      try {
        // const resp = await controlador.Login(req,res)
        // return resp

        // console.log(req.query);
        // console.log(req.usuario);

        const { rol, busqueda } = req.query;
        const usuarios = await controlador.TraerTodosUsuarios(rol, busqueda);
        return res.status(200).json(usuarios);
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          mensaje: "Ocurrio un error al intentar traer a todos los usuarios",
        });
      }
    }
  );
  app.delete(
    `${base}/:id`,
    Auth.esAutorizado,
    Auth.esAdmin,
    Auth.esElMismo,
    async (req, res) => {
      try {
        const id = req.params.id;
        const response = await controlador.EliminarUsuarioPorId(id);
        console.log("USUARIO ELIMINADO--->", JSON.stringify(response));
        return res
          .status(200)
          .json({ nessage: "Exito al eliminar el usuario" });
      } catch (error) {
        console.log("Erro al eliminar el producto -->", error);
        return res.status(500).json({
          message: "Ocurrio un error al intentar eliminar el usuario",
        });
      }
    }
  );
  app.put(`${base}/update`, Auth.esAutorizado, async (req, res) => {
    try {
      const usuario = req.body;
      const {_id:id} = req.usuario; 
      
      await controlador.ActualizarNombreApellidoUsuario(usuario,id);
      return res.status(200).json({ message: "Edicion del usuario con exito" });
    } catch (error) {
      console.log(`Error al actualizar un usuario --> `, error);
      return res.status(500).json({
        message: "Ocurrio un error al intentar actualizar el usuario",
      });
    }
  });
  app.post(`${base}/`,async (req, res) => {
    try {
      const { nombre, email, clave, apellido } = req.body;
      const resp = await controlador.CrearNuevoUsuario(
        nombre,
        apellido,
        email,
        clave,
        "Usuario"
      );
      return res.status(201).json({mensaje:"Se creo nuevo usuario correctamente"});
    } catch (error) {
      console.error("Error al crear un nuevo usuario -->", error);
      // next(error);
      return res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar crear usuario" });
    }
  });
};
module.exports = RutaUsuarios;
