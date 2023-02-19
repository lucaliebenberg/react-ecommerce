const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDatabase;
