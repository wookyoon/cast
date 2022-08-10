const e = require('express');
const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema({
    videotag:[String],

    profiletag:[{
        type:String,
        maxlength:50,
        trim:true,
    }],
});


const Tags = mongoose.model('Tags', tagsSchema);

module.exports = {Tags};