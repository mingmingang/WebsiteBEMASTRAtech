import React from 'react';
import '../../style/Navbar.css';
import logoUrl from "../../assets/dharmatara.png"

// Anda bisa meletakkan path logo di sini atau mengimpornya jika menggunakan bundler seperti Create React App


function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <img src={logoUrl} alt="Logo BEM UNAIR" />
          <div className="logo-text">
            <span className="title">BEM ASTRAtech</span>
            <span className="subtitle">Kabinet Dharmatara</span>
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/home">Beranda</a></li>
            <li><a href="/tentang">Tentang Kami</a></li>
            <li><a href="#">Galeri</a></li>
            <li><a href="#">Artikel</a></li>
            <li><a href="#">Hubungi Kami</a></li>
            <li><a href="#">Layanan</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;