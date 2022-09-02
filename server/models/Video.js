const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    tag:[{type:String}],
    name:{type:String},
    title:{type:String},
    videoUrl:{
        type:String,
        trim:true,
    },
    imageUrl:{
        type:String,
        trim:true,
    },
    category:{type:String},
    hit:{type:Number, default:0},
    like:{type:Number , default:0},
    created:{type:String},
    commentsOpen:{type:Boolean},
    comments:[{
        name:{type:String},
        text:{type:String},
        like:{type:Number},
        created:{type:Date}
    }],
    videoShare:{
        type:Number, // public:0, follower:1, private:2
    }
});

module.exports = mongoose.model('Video',videoSchema);