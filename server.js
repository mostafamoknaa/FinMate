import express from 'express';
import cors from 'cors';
import { connectDB } from './Models/connect.js';
import supplierRouter from './routes/suppler.js';


const app = express()
app.use(express.json())
app.use(cors());


app.use(supplierRouter);

const port = 3000;
connectDB();

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});