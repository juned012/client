import React from "react";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-900 min-h-screen flex justify-center items-center">
      <div className="w-[500px] bg-gray-100">
        <h1 className="text-yellow-700 text-2xl font-semibold text-center">
          🎓 Student Management
        </h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Student Name" required />
          <input type="number" placeholder="Age" required />
          <input type="text" placeholder="City" required />
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default App;
