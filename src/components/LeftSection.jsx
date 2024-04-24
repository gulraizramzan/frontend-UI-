import React from "react";
import { MdLightbulb } from "react-icons/md";
import Button from "./Button";

const LeftSection = () => {
  return (
    <div className="flex flex-col w-full justify-between md:m-2 space-y-5 md:space-y-5">
      {/* Icon and Text Section */}
      <div className="flex flex-col items-center">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300  to-yellow-700  mix-blend-plus-darker flex w-12 h-12  rounded-full justify-center items-center mx-auto">
          <MdLightbulb size={35} color="yellow" />
        </div>
        <p className="text-center leading-5 tracking-tight text-black mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          tempora molestias autem quidem,
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-2">
        <Button title="reset" className="button" />
        <Button title="switch direction" className="button" />
      </div>
    </div>
  );
};

export default LeftSection;
