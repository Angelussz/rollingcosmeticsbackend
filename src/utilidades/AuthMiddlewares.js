const jwt = require("jsonwebtoken");

function esAutorizado(req, res, next) {
  const auth = req.get("Authorization");
  if (!auth) {
    return res.status(401).json({ message: "No autorizado" });
  }
  try {
    const token = auth.split(" ")[1];
    const decodeToken = jwt.verify(token, process.env.CLAVE_SECRETA);
    req.usuario = decodeToken;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token invalido y/o vencido" });
  }
}

function esAdmin(req, res, next) {
  try {
    if (req.usuario.rol !== "Admin") {
      return res.status(403).json({ mensaje: "Acceso denegado" });
    }
    next();
  } catch (error) {
    next(error);
  }
}

function esElMismo(req, res, next) {
  try {
    const idEnviado = req.params.id;
    const {_id:idPropio} = req.usuario;
    if(idEnviado === idPropio){
        return res.status(401).json({
            mensaje:"No te puedes eliminar a ti mismo"
        })
    }
    next();
  } catch (error) {
    next(error)
  }
}
module.exports = { esAutorizado, esAdmin,esElMismo };
