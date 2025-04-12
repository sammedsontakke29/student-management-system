// src/components/StudentForm.jsx
import { useState, useEffect } from 'react';

export default function StudentForm({ onSubmit, selectedStudent, onClear }) {
  const [formData, setFormData] = useState({ name: '', dob: '', studentClass: '' });

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', dob: '', studentClass: '' });
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="dob" value={formData.dob} onChange={handleChange} type="date" required />
      <input name="studentClass" value={formData.studentClass} onChange={handleChange} placeholder="Class" required />
      <button type="submit">{selectedStudent ? 'Update' : 'Add'} Student</button>
      {selectedStudent && <button onClick={onClear}>Cancel</button>}
    </form>
  );
}
