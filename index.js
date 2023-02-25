import express from 'express'
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'
import destRoute from './routes/packages.js'
import cors from 'cors'

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
app.use(express.json())

app.use(cors())

app.use('/packages' , destRoute)

mongoose.set('strictQuery', true);

const connnect = async () => {
    try {
        mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB connected');
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected');
})

app.listen((PORT), () => {
    connnect()
    console.log('listening');
})