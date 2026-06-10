import mongoose from "mongoose";

async function connectDB(notes){
    return mongoose.connect(notes);
}

export default connectDB;