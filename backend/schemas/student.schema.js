const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentid: { type: String, required: true,lowercase:true },
  name: { type: String, required: true,lowercase:true },
  email: { type: String, required: true,lowercase:true },
  password: { type: String },
});

studentSchema.plugin(passportLocalMongoose,{
  usernameField: "studentid",
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;