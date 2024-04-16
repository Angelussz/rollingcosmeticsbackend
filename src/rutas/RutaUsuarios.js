const ControladorUsuario = require("../controladores/ControladorUsuario");
const Auth = require("../utilidades/AuthMiddlewares");
const RutaUsuarios = (base, app) => {
  const controlador = new ControladorUsuario();
  app.post(`${base}/crear-admin`, async (req, res, next) => {
    try {
      const { nombre, email, clave, apellido } = req.body;
      const resp = await controlador.CrearNuevoAdmin(
        nombre,
        apellido,
        email,
        clave
      );
      return res.status(201).json(resp);
    } catch (error) {
      console.error("Error al crear un nuevo usuario -->", error);
      // next(error);
      return res
        .status(500)
        .json({ mesage: "Ocurrio un error al intentar crear usuario" });
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
  app.get(`${base}/`,Auth.esAutorizado,Auth.esAdmin, async (req, res, next) => {
    try {
      // const resp = await controlador.Login(req,res)
      // return resp

      console.log(req.query);
      console.log(req.usuario);
      return res
        .status(200)
        .json({ message: "Hiciste get a todos los usuarios" });
    } catch (error) {
      return res
        .status(500)
        .json({ mesage: "Ocurrio un error al intentar crear usuario" });
    }
  });
};
module.exports = RutaUsuarios;
