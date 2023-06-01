const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()

const app = express();

app.use(express.json(), cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  }).then(() => {
    console.log("Database connected");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("listening on http://localhost:8080/");
});