import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    ref: { type: String, required: true },
    type: { type: String, enum: ["sale", "purchase"], required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    net: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    status: { type: String, enum: ["draft", "final"], default: "draft" }
}, { timestamps: true });

export default mongoose.model("Report", reportSchema);