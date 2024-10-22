const Student = require("../models/student");

exports.createStudent = async (req, res) => {
  try {
    const { name, studentCode, isActive } = req.body;
    const newStudent = await Student.create({
      fullName: name, // Lưu 'name' thành 'fullName' trong MongoDB
      studentCode,
      isActive,
    });

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: {
        _id: newStudent._id,
        name: newStudent.fullName, // Đổi tên trường từ 'fullName' thành 'name'
        studentCode: newStudent.studentCode,
        isActive: newStudent.isActive,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Invalid student code format",
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    const formattedStudents = students.map((student) => ({
      _id: student._id,
      name: student.fullName, // Đổi 'fullName' thành 'name'
      studentCode: student.studentCode,
      isActive: student.isActive,
    }));
    res.status(200).json({
      success: true,
      data: formattedStudents, // Đảm bảo data là mảng như hình mẫu
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Something went wrong on the server",
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params._id);
    res.status(200).json({
      success: true,
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    // Nếu body có 'name', đổi thành 'fullName' để lưu vào cơ sở dữ liệu
    if (req.body.name) {
      req.body.fullName = req.body.name;
      delete req.body.name; // Xóa trường 'name' để tránh cập nhật nhầm
    }
    const student = await Student.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: {
        _id: student._id,
        name: student.fullName, // Đổi tên trường từ 'fullName' thành 'name'
        studentCode: student.studentCode,
        isActive: student.isActive,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params._id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
