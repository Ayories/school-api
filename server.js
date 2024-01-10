const express = require("express");
require('dotenvv').config();

//DATABASE-INSTANCE
const db = require("./config/db")

//server-instance
const server = express();
server.use(express.json());

//routes
const adminRoutes = require("./Admin/adminRoute")
const courseRoutes = require("./Course/courseRoute")
const teacherRoutes = require("./Teacher/teacherRoute")
const studentRoutes = require("./Student/studentRoute")

server.use("api",adminRoutes)
server.use("api",courseRoutes)
server.use("api",studentRoutes)
server.use("api",teacherRoutes)

//logger-file
const logger = require("./utils/logger")


const server = express();
const port = process.env.PORT;

server.listen(port,()=>{
    console.log("rick rolled")
}
)