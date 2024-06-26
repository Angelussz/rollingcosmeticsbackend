const ModeloUsuario = require("../modelos/ModeloUsuario");
const bcrypt = require("bcrypt");
const validadores = require("../utilidades/validadores");
const jwt = require("jsonwebtoken");
class ControladorUsuario {
  async CrearNuevoUsuario(nombre, apellido, email, clave, rol = "Usuario") {
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
        rol,
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
        return res.status(404).json({ mensaje: "Email y/o clave incorrecto" });
      }
      const compare = await bcrypt.compare(
        entradaUsuario.clave,
        usuarioEncontrado.clave
      );
      if (!compare) {
        return res.status(404).json({ mensaje: "Email y/o clave incorrecto" });
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
          nombre: usuarioEncontrado.nombre, 
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

      let query = {}
      
      if(rol !== undefined){
        query["rol"] = rol;
      };
      if(busqueda !== undefined){
        const nombre = {nombre: {$regex:busqueda,$options:"i"}}
        const apellido = {apellido: {$regex:busqueda,$options:"i"}}
        query ["$or"] = [nombre,apellido]
      }
      finalResponse = await ModeloUsuario.find(query)
      
      return finalResponse
    } catch (error) {
      throw error;
    }
  }
  async EliminarUsuarioPorId(id){
    try {
      const eliminarUsuario = await ModeloUsuario.findByIdAndDelete(id);
      return eliminarUsuario;
    } catch (error) {
      throw error;
    }
  }
  async ActualizarNombreApellidoUsuario(usuario,id){
    
    if (!validadores.ValidarEmail(usuario.email)) {
      throw new Error("Formato Email Invalido");
    }
    if (!validadores.ValidarClave(usuario.clave))
      throw new Error("Formato de clave Incorrecto");
    
    await ModeloUsuario.findByIdAndUpdate(id,{
      nombre: usuario.nombre,
      apellido: usuario.apellido,
    })
  }
}

module.exports = ControladorUsuario;
