import React from "react";
import TextInput from "./TextInput";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopSection = () => {
  return (
    <div className="flex flex-col space-y-5 items-center md:justify-between md:space-y-0 md:flex-row ">
      {/* Image */}

      {/* Level and Timer */}
      <div className="flex items-center justify-between mt-4">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          className="w-10 h-10 rounded-lg shadow-xl sm:mr-4"
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
        <div className="flex items-center mt-4">
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
        <button className="bg-white p-2 rounded-lg">
          <IoIosArrowBack color="black" size={30} />
        </button>
        <div className="bg-white w-20  rounded-lg p-1 text-center mx-1">
          <h1 className="text-sm">24th Apr</h1>
          <p className="text-sm">17%</p>
        </div>
        <button className="bg-white p-2 rounded-lg">
          <IoIosArrowForward color="black" size={30} />
        </button>
      </div>
    </div>
  );
};

export default TopSection;
