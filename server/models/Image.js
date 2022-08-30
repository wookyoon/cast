const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    tag:[String],
    name:{type:String},
    title:{type:String},
    url:{
        type:String,
        trim:true,
    },
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
    imageShare:{
        type:Number, // public:0, follower:1, private:2, feedback:3
    }
});

module.exports = mongoose.model('Image',imageSchema);