const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

function ValidarEmail(evalEmail){
    return regexEmail.test(evalEmail)
}

function ValidarClave(evalClave){
    return regexPassword.test(evalClave)
}

module.exports = {
    ValidarEmail,
    ValidarClave
}