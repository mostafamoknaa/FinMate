import mongoose from "mongoose";
import Supplier from "../Models/supplier.model.js";
import Inventory from "../Models/inventory.model.js";

export const addSupplier = async(req, res) => {
    try {
        const { name, mail, phone, address, note } = req.body;
        const newSupplier = new Supplier({ name, mail, phone, address, note });
        await newSupplier.save();
        res.status(201).json({ message: "Supplier added successfully", supplier: newSupplier });
    } catch (error) {
        res.status(500).json({ message: "Error adding supplier", error: error.message });
    }
}
export const getSuppliers = async(req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching suppliers", error: error.message });
    }
}
export const getSupplierById = async(req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id).populate('inventory');
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: "Error fetching supplier", error: error.message });
    }
}

export const updateSupplier = async(req, res) => {
    try {
        const { name, mail, phone, address, note } = req.body;
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id, { name, mail, phone, address, note }, { new: true }
        );
        if (!updatedSupplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }
        res.status(200).json({ message: "Supplier updated successfully", supplier: updatedSupplier });
    } catch (error) {
        res.status(500).json({ message: "Error updating supplier", error: error.message });
    }
}

export const deleteSupplier = async(req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) {
            return res.status(404).json({ message: "Supplier not found" });
        }
        // Optionally, remove all inventory items associated with this supplier
        await Inventory.deleteMany({ supplier: req.params.id });
        res.status(200).json({ message: "Supplier deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting supplier", error: error.message });
    }
}