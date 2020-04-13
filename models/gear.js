const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gearSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    name: String,
    description: String,
    available: Date,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GearReview' }],
    rating: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Gear', gearSchema);