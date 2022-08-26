const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
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
    tag:[String],
    imgUrl:{
        type:Object
    },
    sns:{
        insta:{type:String},
        facebook:{type:String},
        youtube:{type:String}
    },
    info:{type:String},
    followRequest:[Object],
    followers:[Object],
    followersNum:Number,
    likeUser:[Object],
    likeVideo:[Object]
});


module.exports = mongoose.model('Profile',profileSchema);


