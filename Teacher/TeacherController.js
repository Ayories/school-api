const teacherModel = require('./TeacherModel.js')

function register(req,res){
    try{
        const {email,password,date_of_birth}=req.body;
        if(teacherModel.getTeacher(email)){
            res.status(400).json({message:" teacher already exists"})
        }
        teacherModel.register(email,password,date_of_birth)}
    catch(error){
            res.status(400).json({message:"error registering teacher",error:err})
        }
    }

    