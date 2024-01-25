const express = require("express");
require('dotenv').config();

// logger-file
const logger = require("./utils/logger");

//DATABASE-INSTANCE
const db = require("./config/db");

//server-instance 
const server = express();
server.use(express.json()); // express.json is a middleware

// routes
const adminRoutes = require("./Admin/adminRoute");
const courseRoutes = require("./Course/CourseRoute");
const teacherRoutes = require("./Teacher/TeacherRoute");
const studentRoutes = require("./Student/StudentRoute");


server.use('/api',(req,res,next)=>{
    if(req.originalUrl=='/api'){
        res.status(200).json({message:"Welcome to my API"})
    }
    next();
})

server.use("/api/admin",adminRoutes);
server.use("/api/course",courseRoutes);
server.use("/api/student",studentRoutes);
server.use("/api/teacher",teacherRoutes);

server.use((req,res,next)=>{
    next(new Error(`${req.url} PAGE NOT FOUND`))
});

server.use((err,req,res,next)=>{
    console.log(err);
    res.status(400).json({error:err.message});
});


const port = process.env.PORT || 8000;

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' +err.stack);
        return;
    }
    server.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    }); //server.listen to start the server
});