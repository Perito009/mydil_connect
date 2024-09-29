const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors

dotenv.config();

const app = express();

// Middleware pour autoriser les requêtes CORS et lire le JSON dans les requêtes
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Données statiques d'utilisateurs pour la simulation de connexion
const utilisateurs = [
  { email: 'test1@mydil.com', password: 'password123', role: 'student' },
  { email: 'test2@mydil.com', password: 'password456', role: 'prof' }
];

// Route pour gérer la connexion des utilisateurs
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Recherche de l'utilisateur avec l'email et le mot de passe
  const utilisateur = utilisateurs.find(user => user.email === email && user.password === password);

  if (utilisateur) {
    // Si l'utilisateur est trouvé, retourner le rôle
    res.status(200).json({ message: 'Connexion réussie', role: utilisateur.role });
  } else {
    // Si les informations ne correspondent pas, retourner une erreur
    res.status(401).json({ message: 'Email ou mot de passe incorrect' });
  }
});

// Ajout de la route pour recevoir une réservation
app.post('/api/reservations', (req, res) => {
    const { description, date, time } = req.body;
  
    // Logique pour sauvegarder la réservation dans la base de données ou effectuer des actions supplémentaires
    console.log('Nouvelle réservation reçue :', { description, date, time });
  
    // Répondre avec succès
    res.status(200).json({ message: 'Réservation réussie', reservation: { description, date, time } });
  });
  

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
