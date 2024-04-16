const ModeloUsuario = require("../modelos/ModeloUsuario");
const bcrypt = require("bcrypt");
const validadores = require("../utilidades/validadores");
const jwt = require("jsonwebtoken");
class ControladorUsuario {
  async CrearNuevoAdmin(nombre,apellido,email, clave) {
    try {
      if (!validadores.ValidarEmail(email)) {
        throw new Error("Formato Email Invalido");
      }
      if (!validadores.ValidarClave(clave))
        throw new Error("Formato de clave Incorrecto");
      const SALT = parseInt(process.env.BCRYPT_SALT);
      const hash = await bcrypt.hash(clave, SALT);
      const nuevoUsuario = new ModeloUsuario({
        nombre,
        apellido,
        email,
        clave:hash,
        rol: "Admin",
      });
      const guardarUsuario = await nuevoUsuario.save();
      return guardarUsuario;
    } catch (error) {
      throw error;
    }
  }
    
}

module.exports = ControladorUsuario;
