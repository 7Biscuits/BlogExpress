const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

mongoose.connect("mongodb://localhost:27017/BlogExpress", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  }).then(() => {
    console.log("Database connected");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("listening on http://localhost:8080/");
});