import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { image } from "../assets/constant"; // Import your image here

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const URL = "http://localhost:8000/register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, { name, email, password });
      alert("Registration Successful!!");

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert(error.response.data.message);
        navigate("/login");
      } else {
        console.error("Error occurred while registering", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Form Container */}
      <div className="flex-1 flex justify-center items-center">
        <div
          className="p-8 w-96 bg-white bg-opacity-90 rounded-xl shadow-xl"
          style={{
            boxShadow: "0 4px 6px -1px rgba(0,128,128,1.00)", // Blue shadow
          }}
        >
          <h1 className="text-center text-3xl font-bold">Register</h1>
          <p className="text-center text-lg font-medium mt-3">
            Start your journey to get full access.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col items-center">
              <div className="w-full mb-4">
                <label className="font-medium text-lg mb-2">Username:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 py-2 rounded-sm w-full text-lg pl-3"
                />
              </div>
              <div className="w-full mb-4">
                <label className="font-medium text-lg mb-2">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 py-2 rounded-sm w-full text-lg pl-3"
                />
              </div>
              <div className="w-full mb-4">
                <label className="font-medium text-lg mb-2">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 py-2 rounded-sm w-full text-lg pl-3"
                />
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="text-lg bg-black text-white px-4 py-2 border border-black rounded-md hover:bg-gray-800"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative flex justify-center items-center">
        <img
          src="https://png.pngtree.com/png-vector/20200713/ourmid/pngtree-web-development-concept-flat-design-png-image_2303316.jpg" // Use your image path here
          alt="Background"
          className="object-cover w-96 h-96"
        />
      </div>
    </div>
  );
};

export default Register;
