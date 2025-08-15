import express from 'express';
import { getSuppliers, addSupplier } from '../Controllers/supplier.js';
import { getSupplierById, updateSupplier, deleteSupplier } from '../Controllers/supplier.js';
const supplierrouter = express.Router();

// Route to get all suppliers
supplierrouter.get('/suppliers', getSuppliers);
// Route to add a new supplier
supplierrouter.post('/addsupplier', addSupplier);
// Route to get a supplier by ID
supplierrouter.get('/onesupplier/:id', getSupplierById);
// Route to update a supplier by ID
supplierrouter.put('/updatesupplier/:id', updateSupplier);
// Route to delete a supplier by ID
supplierrouter.delete('/deletesupplier/:id', deleteSupplier);

export default supplierrouter;