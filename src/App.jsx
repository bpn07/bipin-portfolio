import React from "react";
import Hero from './Pages/Hero'
import Sidebar from "./components/Sidebar";
import { Route, Routes } from 'react-router-dom'
import Works from "./Pages/Works";
import About from "./Pages/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
