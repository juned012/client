import {
  MdDeleteOutline,
  MdOutlineDateRange,
  MdOutlineLocationCity,
} from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const StudentCard = ({
  index,
  studentName,
  age,
  city,
  handleDeleteStudent,
}) => {
  return (
    <div className="bg-white p-2 px-4 rounded-md relative">
      <h1 className="font-semibold text-xl flex items-center gap-2">
        <PiStudent /> {studentName}
      </h1>
      <h4 className="flex items-center gap-2 mt-1">
        <MdOutlineDateRange /> {age}
      </h4>
      <h4 className="flex items-center gap-2 mt-1">
        <MdOutlineLocationCity /> {city}
      </h4>
      <div className="absolute bottom-1 right-3">
        <button
          onClick={() => handleDeleteStudent(index)}
          className="bg-red-500 font-bold p-2 rounded-full text-white cursor-pointer hover:bg-red-600"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
