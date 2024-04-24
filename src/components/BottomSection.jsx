import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const BottomSection = () => {
  return (
    <div className="flex justify-between mt-5">
      <button className="bg-white p-1 rounded-lg">
        <IoIosArrowBack color="black" size={30} />
      </button>
      <h1>by</h1>
      <button className="bg-white p-1 rounded-lg">
        <IoIosArrowForward color="black" size={30} />
      </button>
    </div>
  );
};

export default BottomSection;
