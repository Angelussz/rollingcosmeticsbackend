function validarNombre(nombre){
    if(nombre.length>=4 && nombre.length<=10){
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
    if(descripcion.length>=4 && descripcion.length<=200){
        return true
    } else{
        return false
    }
}

function validarImagen(imagen){
    if(imagen.length>=10 && imagen.length<=20){
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
    if(marca.length>=4 && marca.length<=20){
        return true
    } else{
        return false
    }
}

module.exports = {validarNombre, validarStock, validarPrecio, validarDescripcion, validarImagen, validarCategoria, validarMarca}