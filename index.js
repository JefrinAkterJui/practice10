const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute =require("./routes/product.route.js")
const port = process.env.PORT || 5000;

// middelware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
app.use("/api/products", productRoute)

app.get('/' , (req , res)=>{
    res.send("Hello API")
})

mongoose.connect("mongodb+srv://jefrinjuidev:E00hS01wqkoPzrgH@backenddb.2z9183q.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log('Conected to the database')
    app.listen(port , ()=>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch(()=>{
    console.log("Connection faield!")
})