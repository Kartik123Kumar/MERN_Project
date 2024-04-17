const mongoose = require('mongoose')


const productSchema = new mongoose.Schema ({
    name:String,
    email:String,
    password: String,
});

module.exports = new mongoose.model('users',productSchema)