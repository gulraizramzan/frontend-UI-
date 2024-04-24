import React from "react";

const RightSection = () => {
  return (
    <div className="flex flex-col w-full justify-between md:m-2 space-y-5 md:space-y-0 mt-24 md:mt-24">
      {/* Quote Section */}
      <div className="flex flex-col items-center shadow-2xl bg-lightYellow rounded-tl-2xl rounded-br-2xl p-4">
        <q className="text-center leading-5 tracking-tight text-black ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          delectus recusandae fuga,
        </q>
        <h6 className="text-justify text-gray-500 mt-2">-Author</h6>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-2">
        <button className="bg-white p-2 text-black rounded-lg hover:shadow-md">
          Joker
        </button>
        <button className="bg-white p-2 text-black rounded-lg hover:shadow-md">
          keyboard
        </button>
      </div>
    </div>
  );
};

export default RightSection;
