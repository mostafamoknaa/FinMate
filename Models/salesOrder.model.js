import mongoose from "mongoose";

const salesOrderSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    ref: { type: String, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    items: [{
        inventoryItem: { type: mongoose.Schema.Types.ObjectId, ref: "Inventory" },
        quantity: Number,
        price: Number
    }],
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("SalesOrder", salesOrderSchema);