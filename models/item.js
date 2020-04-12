const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);