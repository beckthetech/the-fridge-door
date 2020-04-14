const Item = require('../../models/item');

module.exports = {
    index,
    create
}

async function index(req, res) {
    const items = await Item.find({});
    res.status(200).json(items);
}

async function create(req, res) {
    const item = await Item.create(req.body);
    res.status(201).json(item);
}