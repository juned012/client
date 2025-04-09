import {
  MdDeleteOutline,
  MdOutlineDateRange,
  MdOutlineLocationCity,
} from "react-icons/md";
import { PiStudent } from "react-icons/pi";

const StudentCard = () => {
  return (
    <div className="bg-white p-2 px-4 rounded-md relative">
      <h1 className="font-semibold text-xl flex items-center gap-2">
        <PiStudent /> Student Name
      </h1>
      <h4 className="flex items-center gap-2">
        <MdOutlineDateRange /> Age
      </h4>
      <h4 className="flex items-center gap-2">
        <MdOutlineLocationCity /> City
      </h4>
      <div className="absolute bottom-1 right-3">
        <button className="bg-red-500 font-bold p-2 rounded-full text-white cursor-pointer hover:bg-red-600">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
