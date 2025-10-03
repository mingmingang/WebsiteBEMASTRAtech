import React from 'react';
import '../../style/Home.css';
import logo from "../../assets/logo.png";

function Tentang() {
  return (
    <>
      {/* --- HERO SECTION TENTANG --- */}
      <section className="hero-section-2">
        <div className="left-content">
          <img src={logo} alt="Dharmatara Logo" />
          <div className="logo-caption">
            <h1>KABINET</h1>
            <h1>DHARMATARA</h1>
          </div>
        </div>
        <div className="right-content">
          <p className="welcome-tag">Selamat Datang</p>
          <h2>BEM ASTRAtech 2025</h2>
          <h1>Kabinet Dharmatara</h1>
          <p className="description">
            Badan Eksekutif Mahasiswa Politeknik Astra merupakan
            lembaga eksekutif kampus yang menjadi wadah bagi
            mahasiswa Politeknik Astra dengan bersinergi dalam
            menyalurkan kebermanfaatan yang nyata.
          </p>
        </div>
      </section>

      {/* --- VISI & MISI SECTION --- */}
      <section className="tentang-section visi-misi">
        <div className="container">
          <h2 className="section-title">Visi & Misi</h2>
          <div className="content-grid">
            <div className="visi">
              <h3>Visi</h3>
              <p>
                Mewujudkan BEM ASTRAtech sebagai wadah aspirasi,
                pengembangan diri, dan sinergi mahasiswa untuk
                menciptakan kebermanfaatan nyata bagi kampus dan masyarakat.
              </p>
            </div>
            <div className="misi">
              <h3>Misi</h3>
              <ul>
                <li>Mengembangkan potensi dan kompetensi mahasiswa.</li>
                <li>Membangun hubungan harmonis antarorganisasi kampus.</li>
                <li>Menjadi mitra strategis bagi pihak internal dan eksternal.</li>
                <li>Melaksanakan program kerja yang berdampak positif.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEJARAH / DESKRIPSI --- */}
      <section className="tentang-section sejarah">
        <div className="container">
          <h2 className="section-title">Sejarah Singkat</h2>
          <p>
            BEM Politeknik Astra telah hadir sebagai motor penggerak kegiatan
            mahasiswa sejak awal berdirinya kampus. Dengan berbagai kabinet yang
            lahir setiap periode, kini Kabinet Dharmatara 2025 hadir dengan semangat
            baru untuk melanjutkan perjuangan dan memberikan kontribusi nyata
            dalam bidang akademik, sosial, maupun pengabdian masyarakat.
          </p>
        </div>
      </section>

      {/* --- STRUKTUR ORGANISASI (contoh grid anggota) --- */}
      <section className="tentang-section struktur">
        <div className="container">
          <h2 className="section-title">Struktur Organisasi</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={logo} alt="Ketua BEM" />
              <h3>Nama Ketua</h3>
              <p>Ketua BEM</p>
            </div>
            <div className="team-card">
              <img src={logo} alt="Wakil Ketua" />
              <h3>Nama Wakil</h3>
              <p>Wakil Ketua</p>
            </div>
            <div className="team-card">
              <img src={logo} alt="Sekretaris" />
              <h3>Nama Sekretaris</h3>
              <p>Sekretaris</p>
            </div>
            <div className="team-card">
              <img src={logo} alt="Bendahara" />
              <h3>Nama Bendahara</h3>
              <p>Bendahara</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tentang;
