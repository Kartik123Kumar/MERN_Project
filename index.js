const express = require('express')
const cors = require('cors')
require('./DB/config');
const products = require('./DB/Products')


const User = require('./DB/User');
const Products = require('./DB/Products');
const app = express()
 
app.use(express.json())
app.use(cors()) //For CORS error It is a default error.

app.post('/register', async (req,res)=>{
    let user = await new User(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    res.send(result)
})

app.post('/login', async (req,res)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select('-password')
        if(user){
            res.send(user)
        }
        else{
            res.send({result:"NO user Found"})
        }
    }else{
        res.send({result:"Enter Everything"})
    }
})


app.post('/add-products', async (req,res)=>{
   let product = new products(req.body);
   let result = await product.save()
   res.send(result)
})

app.get('/products', async (req,res)=>{
    let products  = await Products.find()
    if(products.length > 0){
        res.send(products)
    }
    else{
        res.send({result:"NO product found "})
    }
})

app.delete('/products/:id', async (req,res)=>{
    const result = await Products.deleteOne({_id:req.params.id})
    res.send(result)
})

app.listen(5000)