import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import path from 'path'
import cors from 'cors'
import mongoose from 'mongoose'
import morgan from 'morgan'
import { fileURLToPath } from 'url';
import productRouter from './routes/product.js'

// main().catch(err => console.log(err))

// async function main() {
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log('Database Connected')
// }

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

// const app = express()

// app.use(cors())
// app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)))
// app.use(express.json())
// app.use(morgan('tiny'))
// app.use('/products', productRouter)
// app.use('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })

// app.listen(process.env.PORT)
