const reservationsSchema = new mongoose.Schema({
    Id_reservations: { type: String, required: true, unique: true },
    date_debut: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    statuts: { type: String }
  });
  
  const Reservations = mongoose.model('Reservations', reservationsSchema);
  