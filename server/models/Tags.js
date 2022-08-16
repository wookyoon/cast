const e = require('express');
const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema({
    tags:[String]
});


module.exports = mongoose.model('Tags',tagsSchema);