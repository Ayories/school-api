const express = require("express")
const router = express.Router();
const courseController = require("./CourseController")

router.post("/course",courseController.createCourse);
router.get("/course/:name",courseController.getcourse)
router.get("/course/",courseController.getcourse)