const courseModel = require("./CourseModel");

function createCourse(req, res) {
  try {
    const { course_title, course_code, course_units, course_description } =
      req.body;
    const course = courseModel.getCourse(course_title);
    if (course) {
      res.status(400).json({ message: "Course exists already" });
    }
    const createdCourse = courseModel.createCourse({
      course_title,
      course_code,
      course_units,
      course_description}
    );
    res.status(200).json({message:"Course Created successfully",data:createdCourse})
  } catch (err) {
    res.status(500).json({ message: "Error creating course", error: err });
  }
}

function getAllCourses(req, res) {
  try {
    let courses;
    let query = req.query.q;
    if(query){
        courses = courseModel.getAllCourses(query)
    } else{
        courses = courseModel.getAllCourses();
    }
    res.status(200).json({ data: courses });
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses", error: err });
  }
}

function getCourse(req,res){
    try{
        const course_title = req.params.title
        const course = courseModel.getCourse(course_title);
        if(!course){
            res.status(400).json({message:"Course doesnt exist"})
        }
        res.status(200).json({data:course})
    } catch(err){
        res.status(500).json({ message: "Error fetching course", error: err });
    }

}

function deleteCourse(req,res){
    try{
        const course_title = req.body;
        const course = courseModel.deleteCourse(req.user.course_title,course_title);
        res.status(200).json({course});
    }

    catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}

const updateCourse = (req,res)=>{
  try{
    const { course_title, course_code, course_units, course_description } =
    req.body;
      const course = courseModel.update(req.body.course_code);
      res.status(200).json({course});
  }
  catch(error){
      res.status(500).json({message:"Internal Server Error"});
  }
}
module.exports = { createCourse, getAllCourses, getCourse, deleteCourse, updateCourse };
