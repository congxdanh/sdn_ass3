// Using Node.js `require()`
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.URL_MONGO)
    .then(() => console.log("Connected!"));
};

module.exports = connectDB;
