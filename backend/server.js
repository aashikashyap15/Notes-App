import express from 'express';
import connectDB from './connect.js';

import noteRoutes from './routes/noteRoutes.js';


const PORT = 8003;
connectDB("mongodb://127.0.0.1:27017/notes").then(()=> console.log("mongoDb connected"));



const app = express();
app.use(express.json());

app.use("/notes", noteRoutes);


app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})