import React from "react";
import Hero from './Pages/Hero'
import Sidebar from "./components/Sidebar";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Works from "./Pages/Works";
import About from "./Pages/About";


function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="path" element={<About/>}/>
        <Route path="works" element={<Works/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
