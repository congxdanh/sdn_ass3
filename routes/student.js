const router = require("express").Router({ mergeParams: true });
const studentController = require("../controller/studentController");

router
  .route("/")
  .post(studentController.createStudent)
  .get(studentController.getAllStudents);
router
  .route("/:_id")
  .get(studentController.getStudentById)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);
module.exports = router;
