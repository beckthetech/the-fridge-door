const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String
}, { timestamps: true });

const postSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
    comments: [commentSchema],
    content: String
}, { timestamps: true });

module.exports = mongoose.model('Classroom', postSchema);
