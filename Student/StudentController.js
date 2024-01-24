function register(req,res){
    try{
    const {email,password,date_of_birth}=req.body;
    if(courseModel.getCourse(email)){
        res.status(400).json({message:" student already exists"})
    }
    courseModel.createCourse(email,password,date_of_birth)}
    catch(error){
        res.status(400).json({message:"error registering student",error:err})
    }
}