import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    ref: { type: String, required: true, unique: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    type: { type: String, enum: ["sale", "purchase"], required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Inventory" }],
    net: { type: Number, required: true },
    paid: { type: Number, default: 0 },
    Note: { type: String },
    status: { type: String, enum: ["paid", "unpaid", "partial"], default: "unpaid" }
}, { timestamps: true });

export default mongoose.model("Invoice", invoiceSchema);