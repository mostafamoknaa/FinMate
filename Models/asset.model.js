import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tagSerial: { type: String, required: true, unique: true },
    category: { type: String },
    purchaseValue: { type: Number, required: true },
    bookValue: { type: Number, required: true },
    status: { type: String, enum: ["active", "disposed"], default: "active" }
}, { timestamps: true });

export default mongoose.model("Asset", assetSchema);