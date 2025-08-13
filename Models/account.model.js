import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    accountNumber: { type: String, required: true, unique: true },
    accountName: { type: String, required: true },
    type: { type: String, enum: ["asset", "liability", "equity", "income", "expense"], required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    balance: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Account", accountSchema);