import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { WTFModel } from './models.js'
const app = express()

app.use(cors())
app.use(express.json())

app.post( "/",async(req,res) => {

    const newTest = new WTFModel({text : req.body.d})
    console.log(newTest)
    await newTest.save()
    res.send("OK")
})

app.get("/helloWorld",async(req,res) => {
  res.send("TU LODU HAI")
})

const CONNECTION_URL = 'mongodb+srv://khushalsindhav26:5CPzacYf9x5Iukbj@cluster0.x44rj.mongodb.net/'
 
mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`)
})