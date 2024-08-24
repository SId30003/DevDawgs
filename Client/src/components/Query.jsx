import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Query = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);
    try {
      // Replace with your actual API endpoint and request details
      const response = await fetch("https://example.com/api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: inputValue }), // Replace with your request payload
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Redirect to the result page with state
      navigate("/result", {
        state: { imageUrl: data.imageUrl, text: data.text },
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <button
              className="bg-gray-800 text-white px-8 py-3 rounded-full flex items-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <IoMdLogOut className="text-xl" />
                  <span>Logout</span>
                </>
              )}
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-col min-h-screen pt-16 bg-gray-200">
        <div className="flex-grow flex justify-center items-center">
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
            <h1 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              AIStoryScape
            </h1>
            <p className="text-center text-lg font-medium text-gray-300 mt-2">
              Makes the learning easy..
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg flex flex-col justify-between">
                <p>
                  Help me plan a game night with my 5 best friends for under
                  $100.
                </p>
                <div className="flex justify-end mt-4">
                  <i className="fas fa-gamepad"></i>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg flex flex-col justify-between">
                <p>
                  What are the best tips to improve my public speaking skills?
                </p>
                <div className="flex justify-end mt-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg flex flex-col justify-between">
                <p>Can you help me find the latest news on web development?</p>
                <div className="flex justify-end mt-4">
                  <i className="fas fa-newspaper"></i>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg flex flex-col justify-between">
                <p>Write JavaScript code to sum all elements in an array.</p>
                <div className="flex justify-end mt-4">
                  <i className="fas fa-code"></i>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center bg-gray-900 rounded-full p-3">
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-transparent flex-grow text-white placeholder-gray-400 outline-none"
                />
                <button
                  className="text-white bg-gray-700 p-2 rounded-full ml-2 hover:bg-gray-600"
                  onClick={handleButtonClick}
                >
                  <IoSearch />
                </button>
                <button className="text-white bg-gray-700 p-2 rounded-full ml-2 hover:bg-gray-600">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Query;
