import './StudentList.css'
export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student._id} className="student-item">
          <div className="student-info">
            <strong>{student.name}</strong> - {student.dob?.slice(0, 10)} - Class {student.studentClass}
          </div>
          <div className="student-actions">
            <button onClick={() => onEdit(student)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(student._id)} className="delete-btn">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}