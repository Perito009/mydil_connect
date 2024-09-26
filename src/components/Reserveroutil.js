import React, { useState } from 'react';
import './Reserveroutil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Reserveroutil = () => {
    const [projectDescription, setProjectDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const currentHour = new Date().toLocaleTimeString();  // Constante pour l'heure actuelle

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleReservation = () => {
        const reservationDetails = {
            description: projectDescription,
            date: selectedDate,
            time: currentHour  // On inclut l'heure dans les détails de la réservation
        };
    
        // Envoyer les détails de la réservation au backend
        fetch('http://localhost:5000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationDetails)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Erreur lors de la réservation');
        })
        .then(data => {
            console.log("Réservation réussie :", data);
            alert('Réservation réussie');
        })
        .catch(error => {
            console.error("Erreur de réservation :", error);
            alert('Erreur lors de la réservation');
        });
    };
    

    return (
        <div className="reservation-container">
            <div className="mydil-logo">
                <img src="logo.png" alt="Mydil Logo" />
            </div>
            
            <div className="search-notification">
                <input type="text" placeholder="Rechercher..." className="search-bar" />
                <div className="notification-bell">
                    <span className="notification-count"></span>
                    <FontAwesomeIcon icon={faBell} className="bell-icon" />
                </div>
                <div className="profile-icon">
                    <FontAwesomeIcon icon={faUserCircle} className="profile-icon-img" />
                </div>
            </div>

            <div className="description-section">
                <textarea 
                    placeholder="Description du projet qui va être réalisé avec cet appareil" 
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />
                <button className="reserve-button" onClick={handleReservation}>
                    Réserver
                </button>
            </div>

            <div className="calendar-section">
                <input 
                    type="month" 
                    value={selectedDate} 
                    onChange={handleDateChange}
                />
            </div>
        </div>
    );
};

export default Reserveroutil;
