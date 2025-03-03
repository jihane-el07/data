const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:  String,
    image:   String, 
    contenu:String, 
    categorie: String,
    imageH: { type: String, default: null }, 
    imageM: String, 
    location:  String, 
    date:  String,
    prix: String, 
    viewsI:  String,
    views:  String, 
    negotiable: String, 
    description: String, 
}, { timestamps: true }); 

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
