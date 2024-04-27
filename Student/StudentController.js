const studentModel = require("./studentModel");
const jwt = require("../utils/jwtFn");
const bcrypt = require("../utils/bcryptFn");


function register(req,res){
    try{
    const {email,password,date_of_birth}=req.body;
    const studentData = studentModel.register(email, password, dob);
    res.status(201).json({ message: "Student created successfully", data:studentData});
    if(courseModel.getCourse(email)){
        res.status(400).json({message:" student already exists"})
    }
    courseModel.createCourse(email,password,date_of_birth)}
    catch(error){
        res.status(400).json({message:"error registering student",error:err})
    }
}

function registerCourse(req,res){
    try{
        const {course_code} = req.body;
        const email = req.user.email
        const result = studentModel.registerCourse(course_code,email);
        if(!result){
            return res.status(400).json({message:"Invalid Course Code"});
        }
        res.status(200).json({message:"Course Registered Successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}


const login = (req, res) => {
    try{
        const {email, password} = req.body;
        const student = studentModel.getStudentByEmail(email);
        if(!student){
        return res.status(400).json({message:"Invalid Email"})
        }
        const isMatch = bcrypt.comparePassword(password, student.password);
        if(!isMatch){
        res.status(400).json({message:"Invalid Password"})
        }
        const token = jwt.generateToken({email:student.email,role:"student"});
        res.header("x-auth",token);
        res.status(200).json({message:"Login Successfull"});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}

const logout = (req, res) => {
    try{
        res.header['x-auth']='';
        res.status(200).json({message:"Logout Successfull"});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const getStudents = (req,res)=>{
    try{
        const students = teacherModel.getStudents();
        res.status(200).json({students});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const getStudent = (req,res)=>{
    try{
        const {email} = req.params;
        const student = teacherModel.getStudentByEmail(email);
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const update = (req,res)=>{
    try{
        const {email,password,dob} = req.body;
        const hashedPassword = "";
        if(password){
            hashedPassword = bcrypt.hashPassword(password);
        }
        const teacher = teacherModel.update(req.user.email,email,hashedPassword,dob);
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

// const deleteTeacher = (req,res)=>{
//     try{
//         const {email} = req.body;
//         const teacher = teacherModel.deleteTeacher(req.user.email,email);
//         res.status(200).json({student});
//     }
//     catch(error){
//         res.status(500).json({message:"Internal Server Error"});
//     }
// }

    module.exports = {
        register,
        registerCourse,
        login,
        logout,
        getStudents,
        getStudent,
        update,
    }

    