const express  = require("express")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")
const conexion = require('./conexionBDMongo.js')
const RutaUsuarios = require("./rutas/RutaUsuarios.js")
require('dotenv').config();
conexion()
const app = express();

app.set("port", process.env.PORT ||9001);
console.log("first")
app.listen(app.get("port"),()=>{
    console.log(`BACKEND PRODUCTOS LISTENING IMPORT IN PORT ${app.get('port')}`)
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())


console.log(__dirname,"DIRNAME")
app.use(express.static(path.join(__dirname,"../public")))

app.get("/test", async(req,res,next) =>{
    try {
        console.log("REQUEST-->",req)
        return res.status(200).json({
            success:true,
            mensaje:"API IS ALIVE"
        })
    } catch (error) {
        console.error(error)
        next(error)
    }
})
RutaUsuarios("/usuarios",app)