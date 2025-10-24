import React from 'react';
import '../../style/Navbar.css';
import logoUrl from "../../assets/logo_bem.png"

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
            <li><a href="/divisi-kabinet">Divisi Kabinet</a></li>
            <li><a href="/ormawa">Ormawa</a></li>
            {/* <li><a href="#">Layanan</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;