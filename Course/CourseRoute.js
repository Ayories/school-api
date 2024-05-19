const express = require("express");
const router = express.Router();

const courseController = require("./CourseController");
const auth = require("../middlewares/auth");
const validateFn = require("../middlewares/validationFn");
const courseSchema = require("./courseValidation");

router.post(
  "/",
  auth.authenticateUser,
  auth.authorizeUser(["admin"]),
  validateFn(courseSchema.createCourse),
  courseController.createCourse
);
router.get("/:title", courseController.getCourse);
router.get("/", courseController.getAllCourses);
router.put(
  "/:title",
  auth.authenticateUser,
  auth.authorizeUser(["admin"]),
  validateFn(courseSchema.updateCourse),
  courseController.updateCourse
);
router.delete(
  "/:title",
  auth.authenticateUser,
  auth.authorizeUser(["admin"]),
  courseController.deleteCourse
);

module.exports = router;
