const ModeloUsuario = require("../modelos/ModeloUsuario");
const bcrypt = require("bcrypt");
const validadores = require("../utilidades/validadores");
const jwt = require("jsonwebtoken");
class ControladorUsuario {
  async CrearNuevoAdmin(nombre, apellido, email, clave) {
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
        clave: hash,
        rol: "Admin",
      });
      const guardarUsuario = await nuevoUsuario.save();
      return guardarUsuario;
    } catch (error) {
      throw error;
    }
  }
  async Login(req, res) {
    try {
      const entradaUsuario = req.body;
      if (entradaUsuario.email === "" || entradaUsuario.email === undefined) {
        throw new Error("debe enviar un email");
      }
      if (entradaUsuario.clave === "" || entradaUsuario.clave === undefined) {
        throw new Error("debe enviar una clave");
      }
      const usuarioEncontrado = await ModeloUsuario.findOne({
        email: entradaUsuario.email,
      });
      if (usuarioEncontrado === null) {
        return res.status(404).json({ message: "Email y/o clave incorrecto" });
      }
      const compare = await bcrypt.compare(
        entradaUsuario.clave,
        usuarioEncontrado.clave
      );
      if (!compare) {
        return res.status(404).json({ message: "Email y/o clave incorrecto" });
      }
      const token = jwt.sign(
        {
          _id: usuarioEncontrado._id,
          rol: usuarioEncontrado.rol,
        },
        process.env.CLAVE_SECRETA,
        { expiresIn: "1D" }
      );

      return res
        .status(200)
        .json({
          email: usuarioEncontrado.email,
          rol: usuarioEncontrado.rol,
          token: token,
        });
    } catch (error) {
      throw error;
    }
  }
  async TraerTodosUsuarios(rol,busqueda) {
    try {
      let finalResponse = [];
      // let query = {
      //   $or:[{nombre: {$regex:busqueda,$options:"i"}},{apellido:{$regex:busqueda,$options:"i"}}]
      // }
      let query = {

      }
      console.log({rol,busqueda})
      if(rol !== undefined){
        query["rol"] = rol;
      };
      if(busqueda !== undefined){
        const nombre = {nombre: {$regex:busqueda,$options:"i"}}
        const apellido = {apellido: {$regex:busqueda,$options:"i"}}
        query ["$or"] = [nombre,apellido]
      }
      console.log("###QUERY-->",JSON.stringify(query))
      finalResponse = await ModeloUsuario.find(query)
      
      return finalResponse
      return "hola"
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ControladorUsuario;
