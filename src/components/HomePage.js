import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assurez-vous d'ajouter un fichier CSS pour cette page

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="left-section">
        <h1 className="title">
          <span className="mydil">My</span>
          <span className="connect">DilConnect</span>
        </h1>
        <div className="buttons">
          <Link to="/student" className="btn">Étudiants</Link>
          <Link to="/student" className="btn">Intervenants</Link>
        </div>
      </div>
      <div className="right-section">
        <img src='logo.png' alt="MyDIL Logo" className="logo" />
      </div>
    </div>
  );
};

export default HomePage;
