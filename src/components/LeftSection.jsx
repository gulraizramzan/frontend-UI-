import React from "react";
import { FaRegLightbulb } from "react-icons/fa";

const LeftSection = () => {
  return (
    <div className="flex flex-col w-full justify-between md:m-2 space-y-5 md:space-y-5 md:mt-24">
      {/* Icon and Text Section */}
      <div className="flex flex-col items-center">
        <FaRegLightbulb size={40} color="yellow" />
        <p className="text-center justify-center text-black mt-2">
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
