const Post = require('../../models/post');
const User = require('../../models/user');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne,
    indexSavedPosts,
    addSavedPost
}

async function index(req, res) {
    const posts = await Post.find({});
    res.status(200).json(posts);
}

async function indexSavedPosts(req, res) {
    const posts = await User.findById(req.user._id).populate('savedPosts');
    res.status(200).json(posts);
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
}

async function create(req, res) {
    req.body.user = req.user;
    req.body.classroom = req.user.classroom;
    const post = await Post.create(req.body);
    res.status(201).json(post);
}

async function addSavedPost(req, res) {
    const newSavedPost = await Post.findById(req.params.id);
    await User.findByIdAndUpdate(req.user._id, 
        { $push: { savedPosts: newSavedPost } },
        { safe: true, upsert: true })
}

async function update(req, res) {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPost);
}

async function deleteOne(req, res) {
    const deletedPost = await Post.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPost);
}