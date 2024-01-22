const express = require("express")
const router = express.Router();
const courseController = require("./CourseController")

router.post("/",courseController.createCourse);
router.get("/:name",courseController.getcourse)
router.get("/",courseController.getcourse)
router.delete("/:name",courseController.deleteCourse);
router.put("/:name",courseController.updateCourse);

module.exports = router;