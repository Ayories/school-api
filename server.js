const express = require("express");
require('dotenvv').config();

//DATABASE-INSTANCE
const db = require("./config/db")

//server-instance
const server = express();
server.use(express.json());

//routes
// const adminRoutes = require("./Admin/adminRoute")
// const courseRoutes = require("./Course/courseRoute")
// const teacherRoutes = require("./Teacher/teacherRoute")
// const studentRoutes = require("./Student/studentRoute")

server.use("/api",(req,res,next)=>{
    res.json("Hello World")
})

server.use("api",adminRoutes)
server.use("api",courseRoutes)
server.use("api",studentRoutes)
server.use("api",teacherRoutes)

server.use((req,res,next)=>{
    next("Hello World")
})

server.use

//logger-file
const logger = require("./utils/logger")


const port = process.env.PORT;

server.listen(port,()=>{
    console.log("rick rolled")
}
)