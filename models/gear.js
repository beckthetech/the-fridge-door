const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gearReviewSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    content: String
  }, { timestamps: true });

const gearSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    name: String,
    description: String,
    available: Date,
    reviews: [userReviewSchema],
    rating: { type: Number, min: 0, max: 5, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Gear', gearSchema);