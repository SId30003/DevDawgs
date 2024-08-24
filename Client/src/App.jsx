import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Result from "./components/Result";
import Ho from "./components/Ho";
// import Res from "./components/Res";
import Query from "./components/Query";

const App = () => {
  return (
    <>
      <main className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ho />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/query" element={<Query />} />
<<<<<<< HEAD
            <Route path="/result" element={<Result />} />
=======
>>>>>>> 944bcfcdf8982e5ee5764bb2a0dac14ae75eb17d
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;