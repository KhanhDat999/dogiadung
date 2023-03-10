const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dogiadung')
    .catch((error) => console.log('Error connecting to database:', error))
    .then((data) => console.log('Connected to database!'));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const products = new Schema({
    img : String,
    name : String,
    Price : Number ,
    Sale : Number ,
    Dặcđiểm: String,

}, {
    collection: 'sanphammoi'
});

const productModel = mongoose.model('sanphammoi', products)

// productModel.create({
//     img : 'dat',
//     name : 'dat',
//     Price : 2346689,
//     Sale : 1352 ,
//     Dặcđiểm: 'dat',

// })


module.exports = productModel 