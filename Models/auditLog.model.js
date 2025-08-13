import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    user: { type: String, required: true },
    action: { type: String, required: true },
    entity: { type: String, required: true },
    status: { type: String, enum: ["success", "failed"], required: true },
    details: { type: String }
}, { timestamps: true });

export default mongoose.model("AuditLog", auditLogSchema);