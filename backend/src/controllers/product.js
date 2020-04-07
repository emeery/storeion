const express = require('express')
const Product = require('../models/product')
const upload = require('../middleware/multer')
const router = express.Router()



router.post(
    '',
    upload.array('imageCollection', 6),
    async(req, res) => {
        const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    console.log('url', url);
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }
    console.log('rrr', reqFiles);
    //     const reqFiles = []
    //     const url = req.protocol + '://' + req.get('host')
    // for (var i = 0; i < req.files.length; i++) {
    //     reqFiles.push(url + '/public/' + req.files[i].filename)
    // }
    // console.log('r', reqFiles)
    try {
        // const product = new Product({
        //     name: req.body.name,
        //     price: req.body.price,
        //     description: req.body.description,
        //     discount: req.body.discount,
        //     stock: req.body.stock,
        //     available: req.body.avaliable,
        //     image: req.body.image
        // })
        // await product.save()
        // res.status(201).json({
        //     mensaje: 'producto agregado',
        //     product: {
        //         id: product._id,
        //         description: product.description,
        //         name: product.name,
        //         stock: product.stock,
        //         price: product.price,
        //         image: product.image,
        //         date: product.date
        //     }
        // })
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