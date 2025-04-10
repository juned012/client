import {
  MdDeleteOutline,
  MdEdit,
  MdOutlineDateRange,
  MdOutlineLocationCity,
} from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const StudentCard = ({
  id,
  name,
  age,
  city,
  handleDeleteStudent,
  handleEditStudent,
}) => {
  return (
    <div className="bg-white p-2 px-4 rounded-md">
      <h1 className="font-semibold text-xl flex items-center gap-2">
        <PiStudent /> {name}
      </h1>
      <h4 className="flex items-center gap-2 mt-1">
        <MdOutlineDateRange /> {age}
      </h4>
      <h4 className="flex items-center gap-2 mt-1">
        <MdOutlineLocationCity /> {city}
      </h4>
      <div className="flex gap-2 my-2">
        <button
          onClick={() => handleEditStudent(id)}
          className="bg-green-500 font-bold p-2 rounded-full text-white cursor-pointer hover:bg-green-600"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => handleDeleteStudent(id)}
          className="bg-red-500 font-bold p-2 rounded-full text-white cursor-pointer hover:bg-red-600"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
