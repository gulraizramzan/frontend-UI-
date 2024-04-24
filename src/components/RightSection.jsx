import React from "react";
import Button from "./Button";

const RightSection = () => {
  return (
    <div className="flex flex-col w-full space-y-5 justify-between m-2  md:space-y-0">
      {/* Quote Section */}
      <div className="flex flex-col items-center shadow-2xl bg-lightYellow rounded-tl-2xl rounded-br-2xl p-4 md:mt-2">
        <p className="text-center leading-5 font-normal tracking-tight text-black ">
          Man sollte alles so einfach wie möglich machen, aber nicht einfacher.
        </p>
        <p className="text-justify text-gray-500 mt-2 opacity-80 font-light">
          -Author
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-5 ">
        <Button title="keyboard" className="button" />

        <div className="flex flex-col">
          <Button title="joker" className="button relative" />
          <span className="absolute flex items-center justify-center bg-red-700 w-8 h-8 rounded-full text-white right-8 bottom-8 md:right-6 md:bottom-12 ">
            10
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
