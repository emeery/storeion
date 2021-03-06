const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'usuario',
    //     required: true
    // },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    discount: {
        type: Number,
        max: 100,
        min: 0
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 255
    },
    imageCollection: {
        type: Array
    },
    available: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product;