import React from "react";
import { MdLightbulb } from "react-icons/md";

const LeftSection = () => {
  return (
    <div className="flex flex-col w-full justify-between md:m-2 space-y-5 md:space-y-5 md:mt-24">
      {/* Icon and Text Section */}
      <div className="flex flex-col items-center">
        <div className="bg-blend-multiply flex w-12 h-12 shadow-inner rounded-full justify-center items-center mx-auto">
          <MdLightbulb size={35} color="yellow" />
        </div>
        <p className="text-center leading-5 tracking-tight text-black mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          tempora molestias autem quidem,
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-2">
        <button className="bg-white p-2 text-black rounded-lg hover:shadow-md">
          Reset
        </button>
        <button className="bg-white p-2 text-black rounded-lg hover:shadow-md">
          Switch Direction
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
