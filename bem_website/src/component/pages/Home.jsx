import React from 'react';
import '../../style/Home.css';
import logoBem from "../../assets/logo_bem.png";

function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={logoBem} alt="Logo BEM ASTRAtech" className="hero-logo" />
          <p className="hero-subtitle">BEM ASTRAtech 2025</p>
          <h1 className="hero-title">
            <span className="text-outline">"KABINET</span> <span className="highlight">DHARMATARA"</span>
          </h1>
        </div>
      </section>

      {/* --- TENTANG SECTION --- */}
      <section className="tentang-section">
        <div className="container">
          <h2 className="section-title">Halo Insan ASTRAtech!</h2>
          <p className="section-description">
            Kalian dapat menemukan informasi terbaru mengenai <b>BEM ASTRAtech</b> pada halaman ini.
          </p>
          <p className="section-description">
            Kami akan terus berkembang dan berevolusi dalam menjalankan fungsi eksekutif di tingkat pusat
            untuk melayani dan menjembatani mahasiswa dengan pihak kampus serta instansi terkait.
            Semua itu dilaksanakan melalui program kerja tahunan dan tugas harian yang berorientasi pada
            kemajuan mahasiswa ASTRAtech.
          </p>
          <p className="section-hashtag">#BEMASTRAtech</p>
        </div>
      </section>

      {/* --- VIDEO PROFILE SECTION --- */}
      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">Video Profile BEM ASTRAtech</h2>
          <div className="video-wrapper">
            <iframe width="100%"
              height="480" 
              src="https://www.youtube.com/embed/EaeKid9mWFY?si=wUgcvpSuRSW4t4UL" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
