const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String
}, { timestamps: true });

const postSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
    comments: [commentSchema],
    content: String,
    tags: []
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
