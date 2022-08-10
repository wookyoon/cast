const e = require('express');
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        required: true,
        match: /.+\@.+\..+/,
        unique:true
    },
    tags:{
        type:String
    },
    imgurl:{
        type:String
    }
});


const Profile = mongoose.model('Profile', profileSchema);

module.exports = {Profile};