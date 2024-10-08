const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
