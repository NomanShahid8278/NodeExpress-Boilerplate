const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_ADDRESS);
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnect;
