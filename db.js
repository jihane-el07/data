const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://eljihane1007:jihane1007@cluster0.5zlsd.mongodb.net/intelli?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('Connected to DB')
})
.catch(()=>{
    console.log('Ubale to Connected to DB')
})