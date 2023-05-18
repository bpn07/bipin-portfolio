import React from "react";
import Hero from './Pages/Hero'
import Sidebar from "./components/Sidebar";
import { Route, Routes } from 'react-router-dom'
import Works from "./Pages/Works";
import About from "./Pages/About";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
