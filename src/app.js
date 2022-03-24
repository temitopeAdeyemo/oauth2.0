const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user.route");
const keys = require("./service/keys");
const passportSetup = require("./service/passport-setup");
const dotenv = require("dotenv").config()
// const path = require("path");
// console.log(__dirname);
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001;
// app.use(express.static("view"));
app.set("view engine", "ejs");
app.use("/auth", router);
const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoose.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("Database not connected");
  }
};
connectDB();
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
