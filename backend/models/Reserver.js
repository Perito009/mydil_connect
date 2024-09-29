const reserverSchema = new mongoose.Schema({
    Id_materiel: { type: String, required: true, ref: 'Materiel' },
    Id_reservations: { type: String, required: true, ref: 'Reservations' }
  });
  
  const Reserver = mongoose.model('Reserver', reserverSchema);
  