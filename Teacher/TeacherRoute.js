const express = require("express");
const router = express.Router();
const teacherController = require("./TeacherController");

router.post("/register-Course",teacherController.registerteacher);
router.post("/drop-Course",teacherController.dropcourse);
router.post("/register-Teacher",teacherController.registerteacher);
router.post("/handle-Course",teacherController.coursehandled);
router.put("/update-Profile",teacherController.updateprofile);
router.post("/login",validateFn(teacherLogin),teacherController.login)
router.post("/logout",studentController.logout)