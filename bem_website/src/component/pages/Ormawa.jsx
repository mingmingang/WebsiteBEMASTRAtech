import React from 'react';
import '../../style/Ormawa.css';
import ormawa1 from '../../assets/logoRohis.png';
import ormawa2 from '../../assets/logoBahasa.jpg';
import ormawa3 from '../../assets/logoMusik.jpg';
import ormawa4 from '../../assets/logoVoli.jpeg';
import ormawa5 from '../../assets/logoPSMA.jpg';
import ormawa6 from '../../assets/logoKWU.jpeg';




function Ormawa() {
  const ormawaList = [
    {
      title: 'Rohani Islam Asy-Syabab',
      img: ormawa1,
      link: '#'
    },
    {
      title: 'UKM Bahasa',
      img: ormawa2,
      link: '#'
    },
    {
      title: 'UKM MUSIC ASTRA TECH',
      img: ormawa3,
      link: '#'
    },
    {
      title: 'VOLLY ASTRATECH',
      img: ormawa4,
      link: '#'
    },
    {
      title: 'PADUAN SUARA MAHASISWA ASTRATECH (PSMA)',
      img: ormawa5,
      link: '#'
    },
    {
      title: 'UKM KEWIRAUSAHAAN',
      img: ormawa6,
      link: '#'
    }
  ];

  return (
    <section className="ormawa-section">
      <div className="ormawa-container">
        <h2 className="ormawa-title">
          ORGANISASI <span>MAHASISWA</span>
        </h2>
        <p className="ormawa-subtitle">Eksplor berbagai kegiatan Organisasi & UKM  Mahasiswa ASTRAtech!</p>

        <div className="ormawa-grid">
          {ormawaList.map((item, index) => (
            <div className="ormawa-card" key={index}>
              <div className="ormawa-image">
                <img src={item.img} alt={item.title} />
                <div className="ormawa-overlay">
                  <h3>{item.title}</h3>
                  <a href={item.link} className="ormawa-btn">Baca Selengkapnya</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ormawa;
