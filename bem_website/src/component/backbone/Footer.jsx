import React from 'react';
import '../../style/Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import logoUrl from "../../assets/dharmatara.png"
// Anda bisa meletakkan path logo di sini atau mengimpornya

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="logo">
            <img src={logoUrl} alt="Logo BEM UNAIR" />
            <div className="logo-text">
              <span className="title">BEM ASTRAtech</span>
              <span className="subtitle">Kabinet Dharmatara</span>
            </div>
          </div>
          <p className="about-text">
            Badan Eksekutif Mahasiswa (BEM) ASTRAtech diartikan sebagai media gerakan mahasiswa yang memiliki peran strategis untuk mewadahi aspirasi serta mendorong perubahan yang progresif bagi seluruh civitas akademika.
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-title">Navigasi</h3>
          <ul className="about-text">
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Galeri</a></li>
            <li><a href="#">Artikel</a></li>
            <li><a href="#">Hubungi Kami</a></li>
            <li><a href="#">Layanan</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-title">Sekretariat</h3>
          <p><strong>Sekretariat BEM ASTRAtech</strong></p>
          <p>Kampus Cikarang<br />Cikarang Selatan, Kab. Bekasi 17530</p>
          <p>bem.astratech</p>
          <div className="social-icons">
            <a href="#" aria-label="Location"><FaMapMarkerAlt /></a>
            <a href="#" aria-label="Email"><FaEnvelope /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Badan Eksekutif Mahasiswa ASTRAtech. Dibuat dengan <span className="heart">♥</span> oleh medinfo.
        </p>
      </div>
    </footer>
  );
}

export default Footer;