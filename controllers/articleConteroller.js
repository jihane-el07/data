const ArticlModel=require('../models/articlModel')
const mongoose = require('mongoose'); 
const createArticle=async (req,res)=>{
    const {title,image,contenu,categorie,imageH,imageM,location,date,prix,viewsI,views,negotiable,description}=req.body;
    const newArticle= await ArticlModel.create({title,image,contenu,categorie,imageH,imageM,location,date,prix,viewsI,views,negotiable,description})
    res.json(newArticle)
}
const AllArticle=async (req,res)=>{
    const All=await ArticlModel.find()
    res.json(All)
}
const UpdateArticle=async (req,res)=>{
    const {articleID}=req.params
    const {title,image,contenu,categorie,imageH,imageM,location,date,prix,viewsI,views,negotiable,description}=req.body;
    const Edit= await ArticlModel.findByIdAndUpdate(articleID,{title,image,contenu,categorie,imageH,imageM,location,date,prix,viewsI,views,negotiable,description},{new:true})
    res.json(Edit)
}
const singlArticle=async (req,res)=>{
    // const {articleID}=req.params
    // const single= await ArticlModel.findByID(articleID)
    // res.json(single)
    try {
        const { articleID } = req.params;
        if (!mongoose.Types.ObjectId.isValid(articleID)) {
            return res.status(400).json({ success: false, message: "Invalid article ID format" });
        }

        const article = await ArticlModel.findById(articleID);
        if (!article) {
            return res.status(404).json({ success: false, message: "Article not found" });
        }
        res.status(200).json({ success: true, data: article });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching article", error: error.message });
    }
}
const DeleteArticle=async (req,res)=>{
    const {articleID}=req.params
    const supp= await ArticlModel.findByIdAndDelete(articleID)
    res.json(supp)
}

module.exports={
    createArticle,AllArticle,UpdateArticle,DeleteArticle,singlArticle
}