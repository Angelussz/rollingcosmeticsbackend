const mongoose = require("mongoose");
const {Schema} = mongoose;

const EsquemaProducto = new Schema({
    nombre:{
        type:String,
        required:[true, "El nombre es requerido"],
        minLength:4,
        maxLength:10,
        unique:true
    },
    stock:{
        type:Number,
        required:[true, "El stock es requerido"]
    },
    precio:{
        type:Number,
        required:[true, "El precio es requerido"]
    },
    descripcion:{
        type:String,
        required:[true, "La descripcion es requerida"],
        minLength:4,
        maxLength:200
    },
    imagen:{
        type:String,
        minLength:10,
        maxLength:20,
        required:[true, "La imagen es requerida"]
    },
    categoria:{
        type:String,
        minLength:4,
        maxLength:20,
        required:[true, "La categoría es requerida"]
    },
    marca:{
        type:String,
        minLength:4,
        maxLength:20,
        required:[true, "La marca es requerida"]
    },
    fecha:{
        type: Date,
        required:[true, "La fecha es requerida"]
    }
})

const ModeloProducto = mongoose.model("producto", EsquemaProducto);

module.exports = ModeloProducto;