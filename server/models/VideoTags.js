const e = require('express');
const mongoose = require('mongoose');

const videoTagsSchema = mongoose.Schema({
    tagname:{type:String},
    videos:[{
        email:{
            type:String,
            trim:true,
            required: true,
            match: /.+\@.+\..+/
        },
        name:{type:String},
        tags:[String],
        title:{type:String},
        url:{
            type:String,
            trim:true,
        },
        hit:{type:Number},
        like:{type:Number},
        bookmark:{type:Number}
    }]
});

videoTagsSchema.pre("findOneAndUpdate", function(next) {

    const vt = this.model;
    const tag = this._conditions['tagname'];

    vt.findOne({tagname:tag},   async (err, doc) => {
        if(!doc) {
            await vt.create(
                { tagname: tag }
            , (e, doc) => {
                next();
            }
            );
        }
        else{
            next();
        }
        });
  });

videoTagsSchema.statics.addVideo =  function (tags, doc) {

    const videotag = this;

    for (var t of tags){
        videotag.findOneAndUpdate(
            { tagname: t }, 
            { $push: { videos: {email:doc.email, name:doc.name, tags:tags, title:doc.title, url:doc.url,hit:0,like:0,bookmark:0} } }
            , (e, doc) => {
                if(e){
                    console.log(e);
                }
        });
   }
    
};

const VideoTags = mongoose.model('VideoTags', videoTagsSchema);

module.exports = {VideoTags};