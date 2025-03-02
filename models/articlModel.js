const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:  String,
    image:   String, // Changed from Text to String
    contenu:String, 
    categorie: String,
    imageH: { type: String, default: null }, // Nullable
    imageM: String, 
    location:  String, 
    date:  String,
    prix: String, 
    viewsI:  String,// Changed from Text to String
    views:  String, 
    negotiable: String, 
    description: String, 
}, { timestamps: true }); // Automatically adds createdAt & updatedAt

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
