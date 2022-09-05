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
    bookmark:{type:Number, default:0},
    like:{type:Number, default:0},
    tag:[String],
    team:{type:String},
    birth:{type:String},
    height:{type:Number},
    weight:{type:Number},
    phoneNumber:{type:Number},
    imgUrl:{
        type:String
    },
    sns:{
        insta:{type:String},
        facebook:{type:String},
        youtube:{type:String}
    },
    youtube:{type:String},
    specialty:{type:String},
    career:{type:String},
    info:{type:String},
    videoUrl:{
        type:String,
        trim:true,
    },
    imageUrl:{
        type:String,
        trim:true,
    },
    followRequest:[Object],
    followers:[Object],
    followersNum:{type:Number},
    likeUser:[Object],
    likeVideo:[Object],
    applyCasting:[Object],
    saveCasting:[Object],
    volume:{type:Number}    // 용량 제한 : 20mb
});


module.exports = mongoose.model('Profile',profileSchema);


