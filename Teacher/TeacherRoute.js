const express = require("express");
const router = express.Router();
const teacherController = require("./teacherController");

router.post("/teacher/register-Course",teacherController.registerCourse);
router.delete("/teacher/drop-Course",teacherController.dropCourse);