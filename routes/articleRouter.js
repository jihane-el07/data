const express=require('express');
const { createArticle } = require('../controllers/articleConteroller');
const router=express.Router();
router.get('/',(req,res)=>{
    res.json({message:'All Article'})
})
router.post('/',createArticle)