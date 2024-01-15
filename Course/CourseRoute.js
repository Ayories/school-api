const express = require("express")
const router = express.Router();
const courseController = require("./CourseController")

router.post("/course",courseController.createCourse);
router.get("/course/:name",courseController.getcourse)
router.get("/course/",courseController.getcourse)
router.delete("/course/:name",courseController.deleteCourse);
router.put("/course/:name",courseController.updateCourse);

module.exports = router;