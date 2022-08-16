const Video = require('../models/Video')
const asyncHandler = require('express-async-handler')
var url = require('url');

const getVideos = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const category = queryData.category;
    const param = queryData.param;
    
    var videos = []
    if(category == "main"){
        const tags = param.split(",");
        for (var tag of tags){
            if(tag=="popular"){
                // sort : ascending =1 / descending=-1
                video = await Video.find().sort({"hit":-1}).limit(12).lean();
            }else{
                video = await Video.find({tag: { $in: tag }}).lean();
            }
            videos.push({'tag':tag, "videos":video})
        }
    }else if(category == "tag"){
        videos = await Video.find({tag: { $in: param }}).limit(12).lean();
    }else if(category == "title"){
        var re = new RegExp(param,"gi");
        videos = await Video.find({"title": re }).limit(12).lean()
    }else{
        var re = new RegExp(param,"gi");
        videos = await Video.find({"name": re }).limit(12).lean()
    }

    if(videos){
        console.log(videos)
        res.json(videos);
    }else{
        return res.status(400).json({message: 'No Videos'})
    }
})

const addVideo = asyncHandler(async (req, res) => {
    const {name, title, url} = req.body
    const tag = req.body.tag.split(',')

    const duplicate = await Video.findOne({title: req.body.title}).lean().exec()
    if(duplicate){
        return res.json({message: 'Dupicate Title'});
    }

    const videoObject = {"tag":tag,name,title,url,"hit":0,"like":0,"bookmark":0,"created":new Date(),"commentsOpen":true}
    const video = await Video.create(videoObject);
    if(video){
        console.log(video)
        return res.status(201).json({message: 'Success'})
    }
    
})

const deleteVideo = asyncHandler(async (req, res) => {
    pass
})

module.exports = {
    getVideos,
    addVideo,
    deleteVideo
}