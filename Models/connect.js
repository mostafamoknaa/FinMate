// db.js
import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bluefactory");
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ DB connection error:", err);
        process.exit(1);
    }
};