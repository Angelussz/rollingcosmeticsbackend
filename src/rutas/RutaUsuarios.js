const ControladorUsuario = require("../controladores/ControladorUsuario");
// const Auth = require("../utils/AuthMiddlewares");
const RutaUsuarios = (base, app) => {
  const controlador = new ControladorUsuario();
  app.post(`${base}/crear-admin`, async (req, res, next) => {
    try {
      const { nombre,email, clave,apellido } = req.body;
      const resp = await controlador.CrearNuevoAdmin(nombre,apellido,email, clave);
      return res.status(201).json(resp);
    } catch (error) {
      console.error("Error al crear un nuevo usuario -->", error);
      // next(error);
      return res
        .status(500)
        .json({ mesage: "Ocurrio un error al intentar crear usuario" });
    }
  });
  
};
module.exports = RutaUsuarios;
