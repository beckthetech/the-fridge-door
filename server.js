const express = require('express');
const path = require('path');
const logger = require('morgan');
// const favicon = require('server-favicon');

require('./config/database');

const groceriesRouter = require('./routes/api/groceries');

const app = express();

// app.use(favicon(path.join(__dirname, 'build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// api routes before "catch all"
app.use('/api/groceries', groceriesRouter);

// "catch all" route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app listening on port ${port}`);
});