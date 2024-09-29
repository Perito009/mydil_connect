const materielSchema = new mongoose.Schema({
    Id_materiel: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    description: { type: String },
    quantite_disponible: { type: String },
    etat: { type: String }
  });
  
  const Materiel = mongoose.model('Materiel', materielSchema);
  