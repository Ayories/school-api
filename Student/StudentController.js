const studentModel = require("./StudentModel");
const transporter = require("../utils/mailer")
const jwt = require("../utils/jwtFn");
const bcrypt = require("../utils/bcryptFn");
const courseModel = require("../Course/CourseModel");

async function registerStudent(req, res) {
  try {
    const { email, password, date_of_birth } = req.body;
    const dob = new Date(date_of_birth).toISOString().split("T")[0];
    const hashedPassword = await bcrypt.hashPassword(password)
    const studentData = await studentModel.register(email, hashedPassword, dob);
    await transporter.sendMail({
      from : process.env.EMAIL_USER,
      to : email
    })
    res
      .status(201)
      .json({ message: "Student created successfully", data: studentData });
    // if (courseModel.getCourse(email)) {
    //   res.status(400).json({ message: " student already exists" });
    // }
    // courseModel.createCourse(email, password, dob);
  } catch (error) {
    res
      .status(400)
      .json({ message: "error registering student", error: error });
  }
}

function registerCourse(req, res) {
  try {
    const { course_code } = req.params.course_name;
    const email = req.user.email;
    if (!result) {
      return res.status(400).json({ message: "Invalid Course Code" });
    }
    const result = studentModel.register_course(course_code, email);
    res.status(200).json({ message: "Course Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await studentModel.getStudentByEmail(email);
    console.log(student)
    if (!student) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    const isMatch = bcrypt.comparePassword(password, student.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.generateToken({ email: student.email, role: "student" });
    res.header("x-auth", token);
    res.status(200).json({ message: "Login Successfull", data : {token} });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const logout = (req, res) => {
  try {
    res.header["x-auth"] = "";
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getStudents = (req, res) => {
  try {
    const students = teacherModel.getStudents();
    res.status(200).json({ students });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getStudent = (req, res) => {
  try {
    const { email } = req.params;
    const student = studentModel.getStudentByEmail(email);
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateStudent = (req, res) => {
  try {
    const { email, password, dob } = req.body;
    const hashedPassword = "";
    if (password) {
      hashedPassword = bcrypt.hashPassword(password);
    }
    let formerEmail = req.user.email;
    const student = studentModel.update({
      formerEmail,
      email,
      hashedPassword,
      dob,
    });
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteStudent = (req, res) => {
  try {
    const { email } = req.body;
    const student = studentModel.deleteStudent(req.user.email, email);
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const dropCourse = (req, res) => {
  try {
    const { course_code } = req.params.course_name;
    const email = req.user.email;
    if (!result) {
      return res.status(400).json({ message: "Invalid Course Code" });
    }
    const result = studentModel.dropCourse(course_code, email);
    res.status(200).json({ message: "Course deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerStudent,
  registerCourse,
  login,
  logout,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  dropCourse,
};
