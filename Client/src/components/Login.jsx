import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { image } from "../assets/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const URL = "http://localhost:8000/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, {
        email,
        password,
      });

      setEmail("");
      setPassword("");

      navigate("/result");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Email or Password is incorrect");
        setEmail("");
        setPassword("");
      }
      console.log("Error occurred while logging in", error);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Form Container */}
      <div className="flex-1 flex justify-center items-center">
        <div className="p-8 w-96 bg-white bg-opacity-90 rounded-xl shadow-lg">
          <h1 className="text-center text-3xl font-bold">Welcome Back!</h1>
          <p className="text-center text-xl font-medium mt-3">
            Hope you are feeling better today.
          </p>

          <form onSubmit={handleSubmit} className="mt-14">
            <div className="flex flex-col items-center">
              <div className="w-full mb-4">
                <label className="font-medium text-lg mb-2">Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-zinc-500 py-2 rounded-sm w-full text-lg font-normal pl-3 text-black"
                />
              </div>
              <div className="w-full mb-4">
                <label className="font-medium text-lg mb-2">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-zinc-500 py-2 rounded-sm w-full text-lg font-normal pl-3 text-black"
                />
              </div>
              <div className="flex flex-col items-center mt-5 w-full">
                <button
                  type="submit"
                  className="text-lg bg-blue-500 text-white px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-600"
                >
                  Sign In
                </button>
                <p className="text-sm mt-4 font-medium">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative flex justify-center items-center">
        <img
          src={image.register}
          alt="Background"
          className="object-cover w- h-96"
        />
      </div>
    </div>
  );
};

export default Login;
