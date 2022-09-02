const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    // 태그 카운팅
    tags:[String],
    count:[Number]
});

module.exports = mongoose.model('Tags',tagsSchema);

// https://stackoverflow.com/questions/51545195/able-to-query-specific-index-in-array-mongoose