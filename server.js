const express = require("express");
require('dotenvv').config();

// logger-file

 const logger = require("./utils/logger");

//DATABASE-INSTANCE
const db = require("./config/db")

//server-instance
const server = express();
server.use(express.json());

//routes
const adminRoutes = require("./Admin/adminRoute")
const courseRoutes = require("./Course/CourseRoute")
const teacherRoutes = require("./Teacher/TeacherRoute")
const studentRoutes = require("./Student/StudentRoute")

server.use("api",adminRoutes)
server.use("api",courseRoutes)
server.use("api",studentRoutes)
server.use("api",teacherRoutes)

server.use("/api",(req,res,next)=>{
    res.json("Hello World")
})

server.use((req,res,next)=>{
    next("Hello World")
})

server.use((err,req,res,next)=>{
    console.log(err);
    res.status(400).json({error:err});
})


const port = process.env.PORT;


db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' +err.stack);
        return;
    }
    server.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
        console.log.log('connected as id ' + connection.thread.id);
    });
});