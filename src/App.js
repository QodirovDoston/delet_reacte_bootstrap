import React from "react";
import Navbarfunc from "./companets/Navbar";
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Getdata from "./companets/Getdata";
import Header from "./companets/Header";

function App() {
  return (
  <>
<Navbarfunc/>
<Routes>
<Route path="/home" element={<Header/>}/>
<Route path="/result" element={<Getdata />}/>
</Routes>
  </>
  );
}

export default App;