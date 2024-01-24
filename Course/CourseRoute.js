const express = require("express")
const router = express.Router();

const courseController = require("./CourseController")
const middleware = require("../middlewares/auth")
const validateFn = require("../middlewares/validationFn");



router.post("/",middleware.authorize("admin"),courseController.createCourse);
router.get("/:name",courseController.getCourse);
router.get("/",courseController.getCourse);
router.delete("/:name",middleware.authorize("admin"),courseController.deleteCourse);
router.put("/:name",courseController.updateCourse);

module.exports = router;