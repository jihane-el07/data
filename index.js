const express = require('express'); 
const app = express(); 
const db=require('./db');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://intelli-annonce.vercel.app/'], // Add other origins if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true,
  }));
const { createArticle ,AllArticle ,UpdateArticle,singlArticle,DeleteArticle,ArticlesByCategory} = require('./controllers/articleConteroller');
const port = 5000; 
app.use(express.json()); 
app.post('/articles', createArticle);
// Route d'accueil 
app.get('/articles', AllArticle);
app.get('/articles/category/:category', ArticlesByCategory);
app.get('/articles/:articleID', singlArticle);
app.put('/articles/:articleID', UpdateArticle); 
app.delete('/articles/:articleID' ,DeleteArticle)

app.listen(port, () => { 
    console.log(`Serveur démarré sur le port ${port}`); 
}); 