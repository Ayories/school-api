function createCourse(req,res){
    try{
    const { course_name,course_code,course_units}=req.body;
    if(courseModel.getCourse(course_name)){
        res.status(400).json({message:`Course ${course_name} exists `})
    }
    courseModel.createCourse(course_name,course_code,course_units)}
    catch(error){
        res.status(400).json({message:"error creating course",error:err})
    }
}