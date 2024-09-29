const categoriesMaterielSchema = new mongoose.Schema({
    Id_categories: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    description: { type: String }
  });
  
  const CategoriesMateriel = mongoose.model('CategoriesMateriel', categoriesMaterielSchema);
  