import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    product: { type: String, required: true },
    category: { type: String },
    stock: { type: Number, default: 0 },
    reorder: { type: Number, default: 0 },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    image: { type: String },
}, { timestamps: true });

export default mongoose.model("Inventory", inventorySchema);