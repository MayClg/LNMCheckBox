const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



const studentRouter = require('./routes/student');
// const usersRouter = require('./routes/users');

app.use('/student', studentRouter);
// app.use('/users', usersRouter);

// app.get("/logout",function(req,res){
//   req.logout();
//   res.send({log:false});
// });

app.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    // res.redirect('/');
    res.send("logged out");
  });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});