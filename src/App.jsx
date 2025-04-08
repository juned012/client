import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaUserPlus } from "react-icons/fa";
import "./App.css";

export default function StudentApp() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", city: "" });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const { data } = await axios.get("https://server-fazg.onrender.com/api/students");
    setStudents(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://server-fazg.onrender.com/api/students", form);
    setForm({ name: "", age: "", city: "" });
    fetchStudents();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://server-fazg.onrender.com/api/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="container">
      <h1>🎓 Student Management</h1>

      <div className="form-container">
        <h2 className="form-header">
          <FaUserPlus className="icon" /> Add New Student
        </h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
          />
          <button type="submit">Add Student</button>
        </form>
      </div>

       <div className="students-list-container">
        <h2 className="students-list-header">📋 Students List</h2>
        {students.length === 0 ? (
          <p className="no-students">No students available.</p>
        ) : (
          <div className="students-list">
            {students.map((student) => (
              <div key={student.id} className="student-item">
                <span className="student-info">
                  {student.name} <span className="age">({student.age})</span> -{" "}
                  {student.city}
                </span>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="delete-button"
                >
                  <FaTrashAlt className="icon" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
