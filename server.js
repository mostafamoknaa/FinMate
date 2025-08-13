import express from 'express';
import cors from 'cors';
import { connectDB } from './Models/connect.js';



const app = express()
app.use(express.json())
app.use(cors());

connectDB();

const port = 3000;



app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});