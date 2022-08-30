const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
    // 태그 카운팅
    tags:[{tag:{type:String},
    count:{type:Number}}]
});

module.exports = mongoose.model('Tags',tagsSchema);