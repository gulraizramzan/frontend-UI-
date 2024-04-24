import React from "react";
import TextInput from "./TextInput";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopSection = () => {
  return (
    <div className="flex flex-col space-y-5 items-center  md:justify-between md:space-y-0 md:flex-row ">
      {/* Level and Timer */}
      <div className="flex items-center space-x-5 justify-between md:space-x-0">
        <img
          src="http://154.12.254.85:5000/icon.png"
          className="w-10 h-10 bg-white rounded-lg shadow-xl sm:mr-4"
          alt="Logo"
        />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <h1>Level</h1>
            <h1>1</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="mr-2">Timer</h1>
            <h1>00.00.00</h1>
          </div>
        </div>
      </div>

      {/* Inputs and Labels */}
      <div className="flex items-center space-x-4">
        <h1>Lousing</h1>
        <div className="flex items-center md:space-x-1  ">
          {[...Array(8)].map((_, index) => (
            <div className="relative" key={index}>
              <TextInput className="input-top" />
              <span className="span-ring">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex items-center">
        <button className="bg-white p-1 rounded-lg">
          <IoIosArrowBack color="black" size={30} />
        </button>
        <div className="bg-white w-20  rounded-lg text-center mx-1">
          <h1 className="text-sm font-semibold">24th Apr</h1>
          <p className="text-sm font-semibold">17%</p>
        </div>
        <button className="bg-white p-1 rounded-lg">
          <IoIosArrowForward color="black" size={30} />
        </button>
      </div>
    </div>
  );
};

export default TopSection;
