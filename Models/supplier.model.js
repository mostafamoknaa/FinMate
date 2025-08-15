import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String },
    phone: { type: String },
    address: { type: String },
    added: { type: Date, default: Date.now },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    note: { type: String }
}, { timestamps: true });

export default mongoose.model("Supplier", supplierSchema);