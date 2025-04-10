import { FaUserPlus, FaListAlt } from "react-icons/fa";
import { PiStudent, PiCloudWarningThin } from "react-icons/pi";
import { MdOutlineDateRange, MdOutlineLocationCity } from "react-icons/md";
import StudentCard from "./components/StudentCard";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const [students, setStudents] = useState([]);
  const [editText, setEditText] = useState(false);
  const [editAge, setEditAge] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.id) {
      try {
        let response;
        if (formData.age && !formData.name && !formData.city) {
          response = await axios.patch(
            `${import.meta.env.VITE_API_URL}/api/students/${formData.id}`,
            { age: formData.age }
          );
        } else {
          response = await axios.put(
            `${import.meta.env.VITE_API_URL}/api/students/${formData.id}`,
            formData
          );
        }

        const updatedStudent = response.data.updatedStudent;

        setStudents((prevStudents) => {
          return prevStudents.map((student) =>
            student.id === updatedStudent.id ? updatedStudent : student
          );
        });

        setEditText(false);
        setFormData({
          name: "",
          age: "",
          city: "",
        });
      } catch {
        console.log("Error updating student:", error);
      }
    } else {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/students`,
          formData
        );
        getAllStudents();
        setFormData({
          name: "",
          age: "",
          city: "",
        });
      } catch (error) {
        console.log("Error saving student:", error);
      }
    }
  };

  const handleEditStudent = (id) => {
    const std = students.find((student) => student.id === id);
    setFormData({
      id: std.id,
      name: std.name,
      age: std.age,
      city: std.city,
    });
    setEditText(true);
  };

  const handleStudentAge = (id) => {
    const std = students.find((s) => s.id === id);
    setFormData({
      id: std.id,
      age: std.age,
    });
    setEditAge(true);
  };

  const getAllStudents = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/students`)
      .then((res) => {
        setStudents(res.data.students);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleDeleteStudent = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/students/${id}`)
      .then(() => {
        console.log("Student Deleted");
        getAllStudents();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto p-5">
        <h1 className="text-white text-3xl font-bold text-center py-8">
          🎓 Student Management
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 bg-gray-200 rounded-md px-5 md:px-10 py-2 h-auto md:h-[420px] mb-6 lg:mb-0">
            <h1 className="text-green-900 text-3xl font-bold text-center py-8 flex justify-center items-center gap-2">
              <FaUserPlus /> {editText ? "Update Student" : "Add Student"}
            </h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="bg-white mb-3 rounded-md relative">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Student Name"
                  required
                  disabled={editAge}
                  className="w-full p-3 outline-none"
                />
                <h2 className="absolute top-4 right-4">
                  <PiStudent className="text-gray-500" />
                </h2>
              </div>
              <div className="bg-white mb-3 rounded-md relative">
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="Age"
                  required
                  className="w-full p-3 outline-none"
                />
                <h2 className="absolute top-4 right-4">
                  <MdOutlineDateRange className="text-gray-500" />
                </h2>
              </div>

              <div className="bg-white mb-3 rounded-md relative">
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="City"
                  required
                  disabled={editAge}
                  className="w-full p-3 outline-none"
                />
                <h2 className="absolute top-4 right-4">
                  <MdOutlineLocationCity className="text-gray-500" />
                </h2>
              </div>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 flex items-center justify-center gap-2 rounded-md text-white px-10 py-4 w-full cursor-pointer mb-5"
              >
                <PiStudent className="text-xl" />
                {editText ? "Update Student" : "Add Student"}
              </button>
              <p className="mt-1 text-center text-gray-600 font-semibold text-sm">
                Add a student to list and store it into database
              </p>
            </form>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-200 rounded-md px-5 md:px-10 py-2 h-auto md:h-[420px] overflow-y-auto">
            <h1 className="text-green-900 text-3xl font-bold text-center py-8 flex justify-center items-center gap-2">
              <FaListAlt /> Student List
            </h1>
            {students.length === 0 ? (
              <div className="flex justify-center flex-col items-center text-gray-600 h-[220px]">
                <PiCloudWarningThin className="text-3xl" />
                <p>No Student Found!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {students.map((student) => {
                  const { id, name, age, city } = student;
                  return (
                    <StudentCard
                      key={id}
                      name={name}
                      age={age}
                      city={city}
                      id={id}
                      handleDeleteStudent={handleDeleteStudent}
                      handleEditStudent={handleEditStudent}
                      handleStudentAge={handleStudentAge}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
