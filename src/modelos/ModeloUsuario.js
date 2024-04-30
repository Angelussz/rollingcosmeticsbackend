const mongoose = require("mongoose");
const { Schema } = mongoose;

const EsquemaUsuario = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: true
    // minLength:[1,"El tamaño del nombre es muy pequeño"]
  },
  apellido:{
    type: String,
    required: true,
    lowercase: true
    // minLength:[3,"El tamaño del nombre es muy pequeño"] 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  clave: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  rol: {
    type: String,
    required: [true, "El rol es requerido"],
  },
});

const ModeloUsuario = mongoose.model("usuario", EsquemaUsuario);

module.exports = ModeloUsuario;
