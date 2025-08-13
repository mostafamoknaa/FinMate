import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    salary: { type: Number, required: true },
    lastPayment: { type: Date },
    status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

export default mongoose.model("Payroll", payrollSchema);