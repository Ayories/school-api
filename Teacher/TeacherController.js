const teacherModel = require('./TeacherModel.js')
const jwt = require("../utils/jwtFn");
const bcrypt = require("../utils/bcryptFn");

function register(req,res){
    try{
        const {email,password,date_of_birth}=req.body;
        const teacherData = teacherModel.register(email, password, dob);
        res.status(201).json({ message: "Teacher created successfully", data:teacherData});
        if(teacherModel.getTeacher(email)){
            res.status(400).json({message:" teacher already exists"})
        }
    }
    catch(error){
            res.status(400).json({message:"error registering teacher",error:err})
        }
    }

function handleCourse(req,res){
    try{
        const {course_code} = req.body;
        const email = req.user.email
        const result = teacherModel.handleCourse(course_code,email);
        if(!result){
            return res.status(400).json({message:"Invalid Course Code"});
        }
        res.status(200).json({message:"Course Selected Successfully"});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}
    

const loginTeacher = (req, res) => {
    try{
        const {email, password} = req.body;
        const teacher = teacherModel.getTeacherByEmail(email);
        if(!teacher){
            return res.status(400).json({message:"Invalid Email"})
        }
        const isMatch = bcrypt.comparePassword(password, teacher.password);
        if(!isMatch){
            res.status(400).json({message:"Invalid Password"})
        }
        const token = jwt.generateToken({email:teacher.email,role:"teacher"});
        res.header("x-auth",token);
        res.status(200).json({message:"Login Successfull"});
        }
        catch(error){
        res.status(500).json({message:"Internal Server Error",error:error.message});
        }
}

const logoutTeacher = (req, res) => {
    try{
        res.header['x-auth']='';
        res.status(200).json({message:"Logout Successfull"});
        }
        catch(error){
        res.status(500).json({message:"Internal Server Error"});
        }
}

const getTeachers = (req,res)=>{
    try{
        const teachers = teacherModel.getTeachers();
        res.status(200).json({teachers});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const getTeacher = (req,res)=>{
    try{
        const {email} = req.params;
        const teacher = teacherModel.getTeacherByEmail(email);
        res.status(200).json({teacher});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const updateTeacher= (req,res)=>{
    try{
        const {email,password,dob} = req.body;
        const hashedPassword = "";
        if(password){
            hashedPassword = bcrypt.hashPassword(password);
        }
        const teacher = teacherModel.updateTeacher(req.user.email,email,hashedPassword,dob);
        res.status(200).json({teacher});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

const deleteTeacher = (req,res)=>{
    try{
        const {email} = req.body;
        const teacher = teacherModel.deleteTeacher(req.user.email,email);
        res.status(200).json({teacher});
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {
    register,
    handleCourse,
    loginTeacher,
    logoutTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher
}

    