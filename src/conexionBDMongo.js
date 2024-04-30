const mongoose = require('mongoose')

const conexion = ()=>{
    const connectionString = process.env.DDBB;

    mongoose.connect(connectionString);
    const connection = mongoose.connection;

    connection.once("open",()=>{
        console.log("DDBB CONNECT SUCCESSFUL");
    })
}

module.exports = conexion