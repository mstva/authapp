import express from 'express'
import router from "./routes/users.js";
import mongoose from 'mongoose'
import cors from 'cors'
import { MongoURI } from "./config/keys.js";

// create the express app
const app = express()

// connect mongoose
mongoose.connect(
    MongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Mongo connected ..')
)

// routes
app.use(express.json())
app.use(cors())
app.use('/app', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running at port ${PORT}`))