import mongoose from "mongoose";

const taxSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["VAT", "Sales", "Service"], required: true },
    rate: { type: Number, required: true },
    appliesTo: { type: String, enum: ["product", "service", "all"], default: "all" },
    status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

export default mongoose.model("Tax", taxSchema);