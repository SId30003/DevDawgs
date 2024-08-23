import React from "react";
import { GoHome } from "react-icons/go";
import { image } from "../assets/constant";

const Home = () => {
  return (
    <>
      <div className="bg-white min-screen flex justify-center items-center p-7">
        <div className=" bg-gray-200 border  rounded-2xl w-full h-[679px]">
          <div className=" flex justify-end m-6">
            <button>
              <GoHome size={35} className=" mr-4 border rounded-full " />
            </button>
            <button className=" bg-white text-black px-7 py-3 border-white rounded-5xl text-sm font-medium">
              Register
            </button>
            <button className=" bg-black text-white px-7 py-2 border-white rounded-2xl  text-sm font-medium ml-5 ">
              Register
            </button>
          </div>

          <div>
            <img src={image.edu} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
