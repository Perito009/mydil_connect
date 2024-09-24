import React from 'react';
import './Reservation.css';

const Reservation = () => {
  const items = [
    { name: 'Imprimante 3D', img: '/path/to/3d-printer.png' },
    { name: 'Imprimante Lazer', img: '/path/to/laser-printer.png' },
    { name: 'Arduino', img: '/path/to/arduino.png' },
    { name: 'Casque VR', img: '/path/to/vr-headset.png' },
    { name: 'Robot', img: '/path/to/robot.png' },
    { name: 'Raspberry', img: '/path/to/raspberry.png' },
  ];

  return (
    <div className="reservation-container">
      <aside className="sidebar">
        <img src="logo.png" alt="Logo MyDIL" className="logo" />
        <ul>
          {items.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </aside>

      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="profile-icon">👤</button>
        </div>

        <div className="items-grid">
          {items.map((item) => (
            <div className="item-card" key={item.name}>
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="buttons">
                <button className="btn-info">Infos</button>
                <button className="btn-reserver">Réserver</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
