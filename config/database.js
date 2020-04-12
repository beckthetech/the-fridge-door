const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/groceries',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connectected to MongoDB at ${db.host}:${db.port}`);
});