const Item = require('../../models/item');
const User = require('../../models/user');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne
}

async function index(req, res) {
    console.log('index function')
    const items = await Item.find({});
    res.status(200).json(items);
}

async function show(req, res) {
    console.log('show function')
    const item = await Item.findById(req.params.id);
    const owner = await User.findById(item.user);
    res.status(200).json(item);
    console.log(owner)
}

async function create(req, res) {
    req.body.user = req.user;
    req.body.owner = req.user.name;
    const item = await Item.create(req.body);
    res.status(201).json(item);
}

async function update(req, res) {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
}

async function deleteOne(req, res){
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItem);
}