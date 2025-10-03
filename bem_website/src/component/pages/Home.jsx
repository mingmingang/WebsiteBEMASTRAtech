import React from 'react';
import '../../style/Home.css';
import logoBem from "../../assets/logo_bem.png";
import logo from "../../assets/logo.png";


function Home() {
  return (
    <>
      {/* --- HERO SECTION PERTAMA --- */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logoBem} alt="Logo BEM ASTRAtech" className="hero-logo" />
          <p className="hero-subtitle">BEM ASTRAtech 2025</p>
          <h1 className="hero-title">
            <span className="text-outline">"KABINET</span> <span className="highlight">DHARMATARA"</span>
          </h1>
          <p className="hero-tagline">"Bakti Unggul, <span className='tagline-2'>Kerja Nyata"</span></p>
          <div className="social-media-bar">
            <div className="social-media-label">
              <span>Social Media</span>
              <div className="arrow-circle">→</div>
            </div>
            <div className="social-links">
              <div className="social-group">
                <i className="fab fa-instagram social-icon"></i>
                <i className="fab fa-tiktok social-icon"></i>
                <span className="social-text">bem.astratech</span>
              </div>
              <div className="social-group">
                <i className="fab fa-linkedin social-icon"></i>
                <i className="fab fa-youtube social-icon"></i>
                <span className="social-text">BEM Politeknik Astra</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;