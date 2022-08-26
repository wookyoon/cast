const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    tag:[String],
    name:{type:String},
    title:{type:String},
    url:{
        type:String,
        trim:true,
    },
    hit:{type:Number},
    like:{type:Number},
    bookmark:{type:Number},
    created:{type:Date},
    commentsOpen:{type:Boolean},
    comments:[{
        name:{type:String},
        text:{type:String},
        created:{type:Date}
    }],
    videoShare:{
        type:String// public:0, follower:1, private:2
    }
});

module.exports = mongoose.model('Video',videoSchema);