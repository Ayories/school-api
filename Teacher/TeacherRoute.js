const express = require("express");
const router = express.Router();
const teacherController = require("./TeacherController");

router.post("/teacher/register-Course",teacherController.registerteacher);
router.post("/teacher/drop-Course",teacherController.login);
router.post("/teacher/register-Course",teacherController.registerteacher);
router.post("/teacher/register-Course",teacherController.coursehandled);