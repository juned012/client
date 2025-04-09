import { FaUserPlus, FaListAlt } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

import StudentCard from "./components/StudentCard";
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto p-5">
        <h1 className="text-white text-3xl font-bold text-center py-8">
          🎓 Student Management
        </h1>
        <div className="flex gap-10">
          <div className="flex-1/2 bg-gray-200 rounded-md px-10 py-2 h-[420px]">
            <h1 className="text-green-900 text-3xl font-bold text-center py-8 flex justify-center items-center gap-2">
              <FaUserPlus /> Add Student
            </h1>
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                placeholder="Student Name"
                required
                className="w-full p-3 rounded-md outline-none bg-white mb-3"
              />
              <input
                type="number"
                placeholder="Age"
                required
                className="w-full p-3 rounded-md outline-none bg-white mb-3"
              />
              <input
                type="text"
                placeholder="City"
                required
                className="w-full p-3 rounded-md outline-none bg-white mb-3"
              />
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 flex items-center justify-center gap-2 rounded-md text-white px-10 py-4 w-full cursor-pointer mb-5"
              >
                <PiStudent className="text-xl" /> Add Student
              </button>
              <p className="mt-1 text-center text-gray-600 font-semibold text-sm">
                Add a student to list and store it into database
              </p>
            </form>
          </div>

          <div className="flex-2/3 bg-gray-200 rounded-md px-10 py-2 h-[420px] overflow-y-auto">
            <h1 className="text-green-900 text-3xl font-bold text-center py-8 flex justify-center items-center gap-2">
              <FaListAlt /> Student List
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <StudentCard />
              <StudentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
