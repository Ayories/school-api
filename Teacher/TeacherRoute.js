const express = require("express");
const router = express.Router();
const teacherController = require("./TeacherController");
const auth = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");
const teacherSchema = require("./teacherValidation")
const {register, teacherLogin} =require("./teacherValidation")

router.post("/register", validateFn(register), teacherController.register);
router.post("/handle-course/:course_name", auth.authenticateUser,auth.authorizeUser(["teacher"]),teacherController.handleCourse);
router.put("/update",teacherController.updateTeacher);//only a teacher
router.get("/:email",teacherController.getTeacher);//only admin and teacher
router.get("/all",teacherController.getTeachers);//only admin
router.post("/login",validateFn(teacherLogin),teacherController.loginTeacher);
router.post("/logout", auth.authenticateUser, teacherController.logoutTeacher);
router.delete("/:email",auth.authenticateUser,auth.authorizeUser(["admin"]),teacherController.deleteTeacher)

module.exports = router;