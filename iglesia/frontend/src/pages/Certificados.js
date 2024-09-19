import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';

const HomePage = () => {
  return (
    <div class='todo'>
    <div class= 'home'>
      <h1>Certificados</h1>
      <nav>
        <ul>
          <li><Link to="/FormBautizo">Bautizo</Link></li>
          <li><Link to="/FormMatrimonios">Matrimonio</Link></li>
          <li><Link to="/FormCatequesis">Catequesis</Link></li>
          <li><Link to="/FormConfirmacion">Confirmación</Link></li>
          <li><Link to="/HistorialCertificados">Certificados</Link></li>
        </ul>
      </nav>
    </div>
    </div>
  );
};
export default HomePage;