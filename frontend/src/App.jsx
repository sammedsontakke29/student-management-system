
import { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from './api';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css'; 

export default function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (data) => {
    if (data._id) {
      await updateStudent(data._id, data);
    } else {
      await createStudent(data);
    }
    fetchStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const handleClear = () => {
    setSelectedStudent(null);
  };

  return (
<div className="app-container">
  <h1 className="app-title">Student Management System</h1>

  <div className="form-container">
    <StudentForm
      onSubmit={handleSubmit}
      selectedStudent={selectedStudent}
      onClear={handleClear}
    />
  </div>

  <div className="list-container">
    <StudentList
      students={students}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  </div>
</div>

  );
}
