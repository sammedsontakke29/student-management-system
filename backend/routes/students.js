import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);           
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); //for adding new student contains data like name,dob,class


router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});   //returns all students from MongoDB.

router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});  // Updates a specific student's data by ID.

router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
  //Deletes a specific student from the database.

export default router;