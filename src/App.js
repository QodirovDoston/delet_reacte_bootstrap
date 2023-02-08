import React from "react";
import Navbarfunc from "./companets/Navbar";
import { Route, Routes } from "react-router-dom";
import Header from "./companets/Header";
import Getdata from "./companets/Getdata";
import EditePage from "./companets/Edite";

function App() {
  return (

    <>
      <Navbarfunc />
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/result" element={<Getdata />} />
        <Route path="/result/edite:id" element={<EditePage/>} />
      </Routes>
    </>

  );
}

export default App;