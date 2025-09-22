import React from 'react';
import Navbar from './component/backbone/Navbar';
import Home from './component/pages/Home';
import Footer from './component/backbone/Footer'; // <-- 1. IMPORT FOOTER

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        {/* Halaman lain akan muncul di sini jika menggunakan routing */}
      </main>
      <Footer /> {/* <-- 2. PANGGIL FOOTER DI SINI */}
    </div>
  );
}

export default App;