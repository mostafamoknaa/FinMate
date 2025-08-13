import mongoose from "mongoose";

const journalEntrySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    ref: { type: String, required: true },
    type: { type: String, enum: ["manual", "system"], default: "system" },
    lines: [{
        account: { type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true },
        debit: { type: Number, default: 0 },
        credit: { type: Number, default: 0 }
    }],
    status: { type: String, enum: ["draft", "posted"], default: "draft" }
}, { timestamps: true });

export default mongoose.model("JournalEntry", journalEntrySchema);