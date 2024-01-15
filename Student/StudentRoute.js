const express = require("express");
const router = express.Router();
const studentController = require("./StudentController");

router.post("/student/register-Course",studentController.registerCourse);
router.delete("/student/drop-Course",studentController.dropCourse);
router.post("/course",studentController.registerstudent);
router.get("/course/:name",studentController.getcourse)
router.get("/course/",studentController.getcourse)
router.post("/course/:name",studentController.getstudent);
router.put("/course/:name",studentController.updatestudent);
