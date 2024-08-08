import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.post( "/",async(req,res) => {
    console.log(req.body)
    res.send("OK")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`)
})