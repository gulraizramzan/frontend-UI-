import React from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const BottomSection = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <button className="bg-white  rounded-lg">
        <IoMdArrowDropleft color="black" size={30} />
      </button>
      <h1>PUT ON CLOTHING </h1>
      <button className="bg-white rounded-lg">
        <IoMdArrowDropright color="black" size={30} />
      </button>
    </div>
  );
};

export default BottomSection;
