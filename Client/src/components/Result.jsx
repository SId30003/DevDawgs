import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const Result = () => {
  const location = useLocation();
  const { imageUrl, text } = location.state || {}; // Get data from navigation state

  return (
    <div>
      <nav className="flex justify-between items-center px-12 py-4 bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <img
            src="https://media.discordapp.net/attachments/1274738048742981716/1276541921128353833/AStory.png?ex=66c9e7ce&is=66c8964e&hm=998b6539d715116150007463fe22021c126b38294e06ca76a333312b8c3cbfc5&=&format=webp&quality=lossless&width=597&height=597"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-xl font-bold text-gray-800">AIStoryScape</h1>
        </div>
        <div className="flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full flex items-center space-x-2">
              <IoMdLogOut className="text-xl" />
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </nav>

      <div className="pt-20 px-12 py-8 bg-gray-200 min-h-screen">
        {!imageUrl || !text ? (
          <div className="text-center text-gray-600">No data available</div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
              <img
                src={imageUrl}
                alt="Result"
                className="w-4/12 h-auto aspect-w-4 aspect-h-3 rounded-lg"
              />
              <div className="ml-8 flex-grow">
                <p className="text-lg font-medium text-gray-800">{text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
