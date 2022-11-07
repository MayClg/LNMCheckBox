"use strict";

const Student = require("../schemas/student.schema");
const passport = require("passport");
passport.use(Student.createStrategy());
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());
