const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "student content can not be empty!"],
  },
  studentCode: {
    type: String,
    required: [true, "student's option can not be empty!"],
  },

  isActive: {
    type: Boolean,
  },
});

const student = mongoose.model("student", studentModel);

module.exports = student;
