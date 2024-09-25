import React, { useState } from 'react';
import './DemandeReservation.css'; // Le fichier CSS pour cette page

const DemandeReservation = () => {
  const [status, setStatus] = useState(null); // État pour suivre si la demande a été acceptée ou refusée

  const handleAccept = () => {
    setStatus('acceptée');
    // Tu peux également ajouter une logique pour mettre à jour le backend ici
  };

  const handleReject = () => {
    setStatus('refusée');
    // Ajouter logique pour mise à jour côté serveur ici si nécessaire
  };

  return (
    <div className="demande-container">
      <aside className="sidebar">
        <img src="logo.png" alt="Logo MyDIL" className="logo" />
        <div className="notification">
          <p>Un étudiant souhaite réserver cet outil</p>
        </div>
      </aside>

      <div className="main-content">
        <div className="demande-header">
          <img src="3d-printer.jpg" alt="Imprimante 3D" className="tool-image" />
          <div className="demande-description">
            <h2>Demande de réservation : Imprimante 3D</h2>
            <p>La demande de réservation pour l'outil Imprimante 3D.</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-accept" onClick={handleAccept}>ACCEPT</button>
          <button className="btn-reject" onClick={handleReject}>REJECT</button>
        </div>

        {status && (
          <div className={`status-message ${status}`}>
            <p>La demande a été {status}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemandeReservation;
