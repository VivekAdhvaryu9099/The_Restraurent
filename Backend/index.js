import express from 'express'

import cors from 'cors'

import dotenv from 'dotenv'


import { errorMiddleware } from './error/error.js'

import { dbConnection } from './config/db.js'

import route from './routes/reservation.js'

const app = express()

app.use(cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true
}));
dotenv.config()

dbConnection()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api/reservation',route)

app.use(errorMiddleware)


app.listen(process.env.PORT,()=>{
    console.log("Server is running on "+process.env.PORT);
    
})

