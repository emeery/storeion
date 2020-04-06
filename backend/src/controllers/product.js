const express = require('express')
const Product = require('../models/product')
const router = express.Router()

router.post('',  async(req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        discount: req.body.discount,
        stock: req.body.stock,
        available: req.body.avaliable,
    })
    try {
        await product.save()
        res.status(201).json({
            mensaje: 'producto agregado',
            product: {
                id: product._id,
                description: product.description,
                name: product.name,
                stock: product.stock,
                price: product.price,
                image: product.image,
                date: product.date
            }
        })
    } catch (e) { res.status(400).send(e) }
});

router.get('', async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            mensaje: "todos los productos",
            products,
        })
    } catch (e) { res.status(500).send() }
});

module.exports = router