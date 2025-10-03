import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/backbone/Navbar';
import Home from './component/pages/Home';
import Footer from './component/backbone/Footer';
import Tentang from "./component/pages/Tentang";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Home" element={<Home />} />
            <Route path="/Tentang" element={<Tentang />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
