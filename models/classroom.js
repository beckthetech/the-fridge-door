const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    code: String
}, { timestamps: true });

module.exports = mongoose.model('Classroom', classroomSchema);
