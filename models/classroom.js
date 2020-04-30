const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    classroomCode: String
}, { timestamps: true });

module.exports = mongoose.model('Classroom', classroomSchema);
