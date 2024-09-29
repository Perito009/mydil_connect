const classerSchema = new mongoose.Schema({
    Id_categories: { type: String, required: true, ref: 'CategoriesMateriel' },
    Id_materiel: { type: String, required: true, ref: 'Materiel' }
  });
  
  const Classer = mongoose.model('Classer', classerSchema);
  