const ModeloUsuario = require("../modelos/ModeloUsuario");
const bcrypt = require("bcrypt");
// const helpers = require("../utils/helpersFunctions");
const jwt = require("jsonwebtoken");
class ControladorUsuario {
  async CrearNuevoAdmin(nombre,email, password) {
    try {
    //   if (!helpers.ValidateEmail(email)) {
    //     throw new Error("Formato Email Invalido");
    //   }
    //   if (!helpers.ValidatePassword(password))
    //     throw new Error("Formato de password Incorrecto");
    //   const SALT = parseInt(process.env.BCRYPT_SALT);
    //   const hash = await bcrypt.hash(password, SALT);
      const nuevoUsuario = new ModeloUsuario({
        nombre,
        email: email,
        password: password,//hash,
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
