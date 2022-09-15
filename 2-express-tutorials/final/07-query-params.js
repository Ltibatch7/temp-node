const express = require('express');
const app = express();

const {products} = require('../data');

app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1><a href='/api/products'>Products</a>")
})

//get all products
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProduct)
})

//get one product based on id
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id == Number(productID))
    if(!singleProduct){
        res.status(404).send('Product not available currently') 
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send("Hello World");
})

//filter the product
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(404).json({success:true,data:[]})
    }
    // console.log(req.query)
    res.status(200).send(sortedProducts);
})

app.listen(4085,()=>{
    console.log("Server running the port 4085........");
})