import React from "react";
import Navbarfunc from "./companets/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./companets/Header";
import Getdata from "./companets/Getdata";
import Edit from "./companets/Edite";

function App() {
  return (
    <>
      <Navbarfunc />
      <Routes>
        {/* <Header/> */}
        <Route path="/home" element={<Header />} />
        <Route path="/result" element={<Getdata />} />
        <Route path="/result/edite:id" element={<Edit/>} />
      </Routes>
    </>
  );
}
export default App;