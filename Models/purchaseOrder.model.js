import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true },
    items: [{
        inventoryItem: { type: mongoose.Schema.Types.ObjectId, ref: "Inventory" },
        quantity: Number,
        price: Number
    }],
    total: { type: Number, required: true },
    tax: { type: Number, default: 0 },
    status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("PurchaseOrder", purchaseOrderSchema);