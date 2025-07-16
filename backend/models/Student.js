import mongoose from 'mongoose';   

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  studentClass: { type: String, required: true },
});   // it is for define schema structure of stud doc

const Student = mongoose.model('Student', studentSchema); 
//create useful schema student

export default Student;