// Using Node.js `require()`
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://danhmuto:hayquenlamon1@cluster0.8futn.mongodb.net/student_api"
    )
    .then(() => console.log("Connected!"));
};

module.exports = connectDB;
