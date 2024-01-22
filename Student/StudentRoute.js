const express = require("express");
const router = express.Router();
const studentController = require("./StudentController");

router.post("/register-Course",studentController.registerCourse);
router.delete("/drop-Course",studentController.dropCourse);
router.post("/",studentController.registerstudent);
router.post("/:name",studentController.getstudent);
router.put("/:name",studentController.updatestudent);
router.post("/login",validateFn(studentLogin),studentController.login)
router.post("/logout",studentController.logout)


// router.get("/student/:name",studentController.getcourse)
// router.get("/student/",studentController.getcourse)