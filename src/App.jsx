import { FaUserPlus, FaListAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

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
          <div className="flex-1/2 bg-gray-200 rounded-md px-10 py-2">
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
                className="bg-green-900 rounded-md text-white px-10 py-4 w-full cursor-pointer mb-5"
              >
                Add Student
              </button>
            </form>
          </div>

          <div className="flex-2/3 bg-gray-200 rounded-md px-10 py-2">
            <h1 className="text-green-900 text-3xl font-bold text-center py-8 flex justify-center items-center gap-2">
              <FaListAlt /> Student List
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-2 px-4 rounded-md relative">
                <h1 className="font-semibold">Student Name</h1>
                <h4>Age</h4>
                <h4>City</h4>
                <div className="absolute bottom-1 right-3">
                  <button className="bg-red-500 p-2 rounded-full text-white cursor-pointer hover:bg-red-600">
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
