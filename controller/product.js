// import { readFileSync } from 'fs'
// const data = JSON.parse(readFileSync('./data.json', 'utf-8'))
// const products = data.products

import { Product } from "../model/product.js"

export const getProduct = async (req, res) => {
    const id = req.params.id
    try{
        const product = await Product.findById(id)
        if(!product){
            res.send("Product not found")
        }
        res.json(product)
    } catch(err) {
        console.log(err)
    }
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

export const createProduct = (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(savedProduct => {
            res.status(201).json({
                success: true,
                message: 'Product created successfully',
                data: savedProduct
            })
        })
        .catch(err => {
            console.log("error saving product, ", err)
            res.status(500).json({
                success: false,
                message: "Error saving product",
                error: err.message || "Internal Server Error"
            })
        })
}

export const replaceProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOneAndReplace({_id: id}, req.body, {returnDocument: 'after'})
        res.json(product)
    } catch(err) {
        console.log(err)
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
        res.json(product)
    } catch(err) {
        console.log(err)
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Product.findByIdAndDelete(id)
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}