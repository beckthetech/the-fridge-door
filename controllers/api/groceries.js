const Item = require('../../models/item');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const groceries = await Item.find({});
    res.status(200).json(groceries);
}

async function create(req, res) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
}