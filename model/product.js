import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    price: {type: Number, required: true},
    discountPercentage: Number
  });

export const Product = mongoose.model('Product', productSchema)