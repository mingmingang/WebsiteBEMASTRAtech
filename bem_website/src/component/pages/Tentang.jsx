import React from 'react';
import '../../style/Tentang.css';
import logo from "../../assets/logo_bem.png";
import visiIcon from "../../assets/visiIcon.png"; 
import misi1 from "../../assets/misi1.png";
import misi2 from "../../assets/misi2.png";
import misi3 from "../../assets/misi3.png";
import misi4 from "../../assets/misi4.png";

function Tentang() {
  return (
    <section className="tentang-section">
      <div className="tentang-container">
        <h2 className="tentang-title">TENTANG BEM</h2>

        <div className="tentang-image">
          <img src={logo} alt="Logo BEM ASTRAtech" />
        </div>

        <p className="tentang-desc">
          Merupakan organisasi mahasiswa di tingkat pusat atau universitas yang didirikan pada tanggal 6 November 1999. 
          BEM ASTRAtech memiliki kewajiban menjalankan fungsi EKSEKUTIF di tingkat pusat dengan kementerian-kementerian di dalamnya,
          yang bertujuan untuk melayani dan menjembatani mahasiswa dengan pihak universitas dan instansi terkait yang 
          dilaksanakan dalam program kerja tahunan serta program tugas harian.
        </p>

        {/* --- VISI --- */}
        <div className="visi-section">
          <h3>VISI</h3>
          <img src={visiIcon} alt="Visi Icon" className="visi-icon" />
          <p>
            Menjadikan BEM ASTRAtech sebagai lembaga eksekutif yang mewujudkan dampak nyata secara adaptif dan progresif 
            bagi pihak internal dan/atau eksternal Politeknik ASTRA.
          </p>
        </div>

        {/* --- MISI --- */}
        <div className="misi-section">
          <h3>MISI</h3>
          <div className="misi-list">
            <div className="misi-item">
              <img src={misi1} alt="Misi 1" />
              <p>Meningkatkan efektivitas dan efisiensi dalam pengelolaan organisasi BEM ASTRAtech.</p>
            </div>
            <div className="misi-item">
              <img src={misi2} alt="Misi 2" />
              <p>Menjalin hubungan secara interaktif dan sinergis dengan pihak internal dan/atau eksternal Politeknik ASTRA.</p>
            </div>
            <div className="misi-item">
              <img src={misi3} alt="Misi 3" />
              <p>Mengakomodasikan aspirasi mahasiswa secara aktif dan kolaboratif.</p>
            </div>
            <div className="misi-item">
              <img src={misi4} alt="Misi 4" />
              <p>Melaksanakan kegiatan secara profesional berbasis sistem yang berlandaskan kedisiplinan dan kekeluargaan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;
