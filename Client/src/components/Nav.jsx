import React from "react";
import { Link } from "react-router-dom";

import { CiUser } from "react-icons/ci";

function Nav() {
  return (
    <nav className=" p-4 border-b">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <Link>
            <img
              src="https://media.discordapp.net/attachments/1274738048742981716/1276541921128353833/AStory.png?ex=66c9e7ce&is=66c8964e&hm=998b6539d715116150007463fe22021c126b38294e06ca76a333312b8c3cbfc5&=&format=webp&quality=lossless&width=597&height=597"
              alt="Logo"
              className="h-10 w-10 mr-3"
            />
          </Link>
          <h1 className=" text-xl font-semibold">BatMan</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-gray-400 hover:text-black ">
            Home
          </Link>
          <Link to={"/"} className="text-gray-400 hover:text-black">
            How Works?
          </Link>
          <Link to={"/"} className="text-gray-400 hover:text-black">
            Contact Us
          </Link>
        </div>

        <div className="block">
          <button className="bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-700 mr-4 flex items-center">
            <CiUser className=" text-white mr-2" size={22} />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
