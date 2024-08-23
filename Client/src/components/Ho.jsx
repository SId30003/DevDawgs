import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { image } from "../assets/constant";
import { Link } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";

function Ho() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="flex justify-between items-center px-12 py-4 bg-white border-b border-gray-200">
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
            How Works?
          </Link>
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full flex items-center space-x-2">
            <FaUserCircle className=" text-xl" />
            <span>Register</span>
          </button>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full flex items-center space-x-2">
            <span>Login</span>
            <BiSolidLogInCircle className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center px-12 py-16 overflow-hidden">
        {/* Left Section */}
        <div className="max-w-lg mb-8 md:mb-0">
          {/* Icon and Title */}
          <div className="flex items-start mb-6">
            <h1 className="text-3xl font-bold">
              Next-Gen AI: <br /> Transform Text to Speech & Images
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-lg">
            AIStoryScape turns complex topics into stories, that makes user
            experience engaging and interactive with generated images and voice
            commands.
          </p>
          {/* Reviews */}
          <div className="flex items-center mb-8">
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-medium">198k</span>
            <a href="#" className="text-gray-600 underline ml-2"></a>
          </div>
          {/* Buttons */}
          <div className="flex space-x-6">
            <Link to={"/register"}>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full">
                Get Started
              </button>
            </Link>
            <button className="flex items-center text-green-600 underline">
              <div className="flex items-center">
                <span className="mr-2">How we work?</span>
                <div className="bg-green-600 h-3 w-3 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="w-full max-w-lg h-auto rounded-lg "
            src={image.edu} // Replace with your video URL
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Ho;
