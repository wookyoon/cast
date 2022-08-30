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
    category:{type:Number},// 자기소개:0, 자유연기:1, 특기:2
    hit:{type:Number},
    like:{type:Number},
    created:{type:Date},
    commentsOpen:{type:Boolean},
    comments:[{
        name:{type:String},
        text:{type:String},
        like:{type:Number},
        created:{type:Date}
    }],
    videoShare:{
        type:Number, // public:0, follower:1, private:2, feedback:3
    }
});

module.exports = mongoose.model('Video',videoSchema);