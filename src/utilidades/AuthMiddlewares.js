const jwt = require("jsonwebtoken")

function esAutorizado(req,res,next){
    const auth = req.get("Authorization");
    if(!auth){
        return res.status(401).json({mensaje:"No autorizado"})
    }
    try {
        const token = auth.split(" ")[1];
        const decodeToken = jwt.verify(token, process.env.CLAVE_SECRETA);
        req.usuario = decodeToken
        next()
    } catch (error) {
        // next(new Error("Token vencido"))
        return res.status(401).json({mensaje:"Token invalido y/o vencido"})
    }
}

function esAdmin(req,res,next){
    try {
        if(req.usuario.rol!=="Admin"){
            return res.status(403).json({mensaje:"Acceso denegado"})
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {esAutorizado,esAdmin}