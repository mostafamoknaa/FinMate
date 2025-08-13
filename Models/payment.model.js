import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    reference: { type: String, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    method: { type: String, enum: ["cash", "bank", "card", "transfer"], required: true },
    debit: { type: Number, default: 0 },
    credit: { type: Number, default: 0 },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);