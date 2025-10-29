import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js'


dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;
const dbUri = 'mongodb://localhost:27017/blog-react';

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(cors({
    origin : 'http://localhost:5173' || process.env.FRONTEND_URL,
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

mongoose.connect(dbUri)
        .then(() => {console.log('CONNECTED TO DATABASE')})
        .catch((err) => console.log(err));



app.get('/' , (req , res) => {
    res.json({success : "opening website"})
    console.log("opening website")
})

app.use('/api' , authRoutes);
app.listen(PORT , () => {console.log(`App is listening at PORT ${PORT}`)})