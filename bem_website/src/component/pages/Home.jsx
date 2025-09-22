import React from 'react';
import '../../style/Home.css';
import logoBem from "../../assets/logo_bem.png"

function Home() {
  return (
    <main className="hero-section">
      <div className="hero-content">
         <img src={logoBem} alt="Logo BEM ASTRAtech" className="hero-logo" />
        <p className="hero-subtitle">BEM ASTRAtech 2025</p>
       <h1 className="hero-title">
  <span className="text-outline">"KABINET</span> <span className="highlight">DHARMATARA"</span>
</h1>
        <p className="hero-tagline">"Bakti Unggul, <span className='tagline-2'>Kerja Nyata"</span></p>
       <div class="social-media-bar">
  <div class="social-media-label">
    <span>Social Media</span>
    <div class="arrow-circle">→</div>
  </div>
  <div class="social-links">
    <div class="social-group">
      <i class="fab fa-instagram social-icon"></i>
      <i class="fab fa-tiktok social-icon"></i>
      <span class="social-text">bem.astratech</span>
    </div>
    <div class="social-group">
      <i class="fab fa-linkedin social-icon"></i>
      <i class="fab fa-youtube social-icon"></i>
      <span class="social-text">BEM Politeknik Astra</span>
    </div>
  </div>
</div>
      </div>
    </main>
  );
}

export default Home;