const express = require('express'); 
const app = express(); 
const db=require('./db');
const cors = require('cors');
app.use(cors());
const { createArticle ,AllArticle ,UpdateArticle,singlArticle,DeleteArticle} = require('./controllers/articleConteroller');
const port = 3000; 
// Middleware pour interpréter les requêtes JSON 
app.use(express.json()); 
app.post('/articles', createArticle);
// Route d'accueil 
app.get('/articles', AllArticle);
app.put('/articles/:articleID', UpdateArticle); 
app.delete('/articles/:articleID' ,DeleteArticle)

app.listen(port, () => { 
    console.log(`Serveur démarré sur le port ${port}`); 
}); 