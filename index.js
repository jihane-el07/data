const express = require('express'); 
const app = express(); 
const db=require('./db');
const { createArticle ,AllArticle ,UpdateArticle,singlArticle,DeleteArticle} = require('./controllers/articleConteroller');
const port = 8000; 
// Middleware pour interpréter les requêtes JSON 
app.use(express.json()); 
app.post('/articles', createArticle);
// Route d'accueil 
app.get('/articles', AllArticle);
app.put('/articles/:articleID', UpdateArticle); 
app.delete('/articles/:articleID' ,DeleteArticle)
// Récupérer tous les utilisateurs 
// app.get('/articles', (req, res) => { 
// const articles = [ 
// { id: 1, nom: 'Utilisateur 1' }, 
// { id: 2, nom: 'Utilisateur 2' }, 
// { id: 3, nom: 'Utilisateur 3' } 
// ]; 
// res.json(articles); 
// }); 
app.listen(port, () => { 
    console.log(`Serveur démarré sur le port ${port}`); 
}); 