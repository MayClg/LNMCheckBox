const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const LocalStrategy = require('passport-local').Strategy;

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const studentSchema = new mongoose.Schema({
  studentid: { type: String, lowercase: true },
  name: { type: String, lowercase: true },
  email: { type: String, lowercase: true },
  password: { type: String },
});

studentSchema.plugin(passportLocalMongoose, {
  usernameField: "studentid",
});
const Student = mongoose.model("Student", studentSchema);

// passport.use(Student.createStrategy());
passport.use(new LocalStrategy(Student.authenticate()));

// passport.serializeUser(Student.serializeUser());
passport.serializeUser(Student.serializeUser())
passport.deserializeUser(Student.deserializeUser());

app.post("/student/login", function (req, res) {
  console.log(req.body);
  const user = new Student({
    studentid: req.body.username,
    password: req.body.password,
  });
  //   console.log(user);
  req.login(user, function (err) {
    if (err) {
      console.log(err+" hahaha");
    res.send(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send({ title: "GeeksforGeeks" });
      });
    }
  });
});

app.post("/student/register", function (req, res) {
  const stu = new Student({
    studentid: req.body.username,
    name: req.body.name,
    email: req.body.email,
  });
  Student.register(stu, req.body.password, function (err, user) {
    if (err) {
      console.log(err + " haha 1 +++");
    } else {
      req.login(user, (er) => {
        if (er) {
          console.log(er + " haha 2 +++");
        } else {
          console.log(req.user + "   ACCOUNT SAVED   ");
        }
      });
    }
  });
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });

app.listen(port, function () {
  console.log("Server started on port " + port);
});
