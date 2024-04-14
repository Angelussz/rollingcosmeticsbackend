const express  = require("express")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")
const databaseConnection = require('./databaseConnection.js')
const UserRoutes = require("./routes/UserRoutes.js")
const ProductRoutes = require("./routes/ProductRoutes.js")
require('dotenv').config();