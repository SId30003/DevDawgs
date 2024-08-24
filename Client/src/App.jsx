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
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;