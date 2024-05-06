const express = require("express");
const router = express.Router();
const teacherController = require("./TeacherController");
const auth = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");
const teacherSchema = require("./teacherValidation")

router.post("/register-course", auth.authenticateUser,auth.authorizeUser("admin"), validateFn(courseSchema.register),teacherController.register);
router.post("/handle-course", auth.authenticateUser,auth.authorizeUser("teacher"),teacherController.handleCourse);
router.put("/update-Profile",teacherController.updateTeacher);
router.get("/:title",teacherController.getTeacher);
router.get("/",teacherController.getTeachers);
router.post("/login",validateFn(teacherLogin),teacherController.loginTeacher)
router.post("/logout", auth.authenticateUser, teacherController.logoutTeacher);
router.delete("/:title",auth.authenticateUser,auth.authorizeUser("admin"),teacherController.deleteTeacher)