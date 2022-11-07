const router = require("express").Router();
let Student = require("../schemas/student.schema");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(Student.authenticate()));
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());

router.route("/login").post((req, res) => {
  // console.log(req.body);
  const user = new Student({
    studentid: req.body.username,
    password: req.body.password,
  });
  //   console.log(user);
  req.login(user, function (err) {
    if (err) {
      console.log(err + " hahFaha");
      res.send(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send({studentid: req.user.studentid,log:true});
      });
    }
  });
});

router.route("/logout").get((req, res) => {
  req.logout();
  res.redirect("/");
});

router.route("/register").post((req, res) => {
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

module.exports = router;
