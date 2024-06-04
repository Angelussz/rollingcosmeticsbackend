const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!*@#$%^&+=])(?=.{6,20})/

function ValidarEmail(evalEmail){
    return regexEmail.test(evalEmail)
}

function ValidarClave(evalClave){
    return regexPassword.test(evalClave)
}

function validarNombre(nombre){
    if(nombre.length>=2 && nombre.length<=30){
        return true
    } else{
        return false
    }
}

function validarStock(stock){
    if(stock!==undefined){
        return true
    } else{
        return false
    }
}

function validarPrecio(precio){
    if(precio!==undefined){
        return true
    } else{
        return false
    }
}

function validarDescripcion(descripcion){
    if(descripcion.length>=3 && descripcion.length<=100){
        return true
    } else{
        return false
    }
}

function validarImagen(imagen){
    if(imagen.length>=10 && imagen.length<=400){
        return true
    } else{
        return false
    }
}

function validarCategoria(categoria){
    if(categoria.length>=4 && categoria.length<=20){
        return true
    } else{
        return false
    }
}

function validarMarca(marca){
    if(marca.length>=2 && marca.length<=30){
        return true
    } else{
        return false
    }
}

function validarFecha(fecha){
    return true;
}

module.exports = {validarNombre, validarStock, validarPrecio, validarDescripcion, validarImagen, validarCategoria, validarMarca,ValidarClave,ValidarEmail, validarFecha}