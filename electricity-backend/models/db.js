// const dotenv = require("dotenv");
// dotenv.config();
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.token = require("./Token");

//connect to MongoDB server
db.mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

module.exports = db;
