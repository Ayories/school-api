const express = require("express");
const router = express.Router();
const teacherController = require("./TeacherController");
const middleware = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");

router.post("/register-Course",teacherController.register);
router.post("/drop-Course",teacherController.deleteTeacher);
// router.post("/register-Teacher",teacherController.registerteacher);
router.post("/handle-Course",teacherController.coursehandled);
router.put("/update-Profile",teacherController.update);
router.post("/login",validateFn(teacherLogin),teacherController.login)
router.post("/logout",teacherController.logout);
router.delete("/")