import React from 'react';
import '../../style/DivisiKabinet.css';
import logoKabinet from "../../assets/logo.png"; // logo di kiri
import ketua1 from "../../assets/ketua1.png";
import ketua2 from "../../assets/ketua2.png";
import bendahara from "../../assets/bendahara.png";
import sekretaris from "../../assets/sekretaris.png";
import medinfo from "../../assets/medinfo.png";
import humas from "../../assets/humas.png";
import minbak from "../../assets/minbak.png";
import hubinternal from "../../assets/hubinternal.png";
import psdmo from "../../assets/psdmo.png";
import background from "../../assets/bgHome.png";

function DivisiKabinet() {
  return (
    <>
      <section className="divisi-hero">
        <div className="divisi-container">
          <div className="divisi-header">
            <div className="divisi-logo">
              <img src={logoKabinet} alt="Logo Kabinet Dharmatara" />
              <h1>KABINET</h1>
              <h1 style={{ marginBottom: '100px' }}>
                DHARMATARA
              </h1>
            </div>

            <div className="divisi-text">
              <p className="welcome">Selamat Datang</p>
              <h2>BEM ASTRAtech 2025</h2>
              <h1>Kabinet Dharmatara</h1>
              <p>
                Badan Eksekutif Mahasiswa Politeknik Astra merupakan lembaga eksekutif kampus
                yang menjadi wadah bagi mahasiswa Politeknik Astra dengan bersinergi dalam
                menyalurkan kebermanfaatan yang nyata.
              </p>
            </div>
          </div>

          {/* BAGIAN GRID DIVISI */}
          <div className="divisi-section">
            <h1 className="divisi-title">Kepengurusan Kabinet Dharmatara</h1>
            <div className="divisi-grid">
              <div className="divisi-card">
                <img src={ketua1} alt="Ketua" />
              </div>
              <div className="divisi-card">
                <img src={ketua2} alt="Wakil" />
              </div>
              <div className="divisi-card">
                <img src={sekretaris} alt="Sekretaris" />
              </div>
              <div className="divisi-card">
                <img src={bendahara} alt="Bendahara" />
              </div>
              <div className="divisi-card">
                <img src={psdmo} alt="Divisi PSDMO" />
              </div>
              <div className="divisi-card">
                <img src={minbak} alt="Divisi Minbak" />
              </div>
              <div className="divisi-card">
                <img src={medinfo} alt="Divisi Medinfo" />
              </div>
              <div className="divisi-card">
                <img src={humas} alt="Divisi Humas" />
              </div>
              <div className="divisi-card">
                <img src={hubinternal} alt="Div. Hub Internal" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DivisiKabinet;
