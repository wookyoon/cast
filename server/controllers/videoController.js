const Video = require('../models/Video')
const Profile = require('../models/Profile')
const asyncHandler = require('express-async-handler')
var url = require('url');

const getVideos = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const category = queryData.category;
    const param = queryData.param;
    const type = queryData.type;
    var videos = []
    console.log(category, param, type)
    // console.log(param)
    
    if(category == "전체"){
        videos = await Video.find().lean();
    }else if(category == "tag"){
            const tags = param.split(",");
            videos = await Video.find({tag: { $all: tags }}).lean();
    }else if(category == "category"){
        if(param == "전체보기"){
            videos = await Video.find().lean();
        }else{
            videos = await Video.find({"category": param }).lean()
        }
    }else if(category == "title"){
        var re = new RegExp(param,"gi");
        videos = await Video.find({"title": re }).lean()
    }else if(category == "name"){
        var re = new RegExp(param,"gi");
        videos = await Video.find({"name": re }).lean()
    }else if(category=="intro"){
        videos = await Video.find({"name": param, "title": "intro"}).lean();
    }else if(category == "mypage"){
        if(type == "video"){
            likes = await Profile.findOne({"name":param},{_id:0, likeVideo:1}).lean()
            console.log(likes.likeVideo)
            videos = await Video.find({_id:likes.likeVideo})
            console.log(videos)
        }else if(type == "user"){
            console.log("&&&&", param)
            users = await Profile.findOne({"name":param},{_id:0, likeUser:1})
            console.log(users.likeUser)
            videos = await Video.find({"name":users.likeUser, "title": { $eq: 'intro' }})
            console.log("$$$",videos)
        }else{
            videos = await Video.find({"name": param, "title": { $ne: 'intro' } }).lean();
        }
    }else if(category == "sort"){
        if(param == "New"){
            videos = await Video.find().sort({"created":-1}).lean();
        }else if(param == "Old"){
            videos = await Video.find().sort({"created":1}).lean();
        }if(param == "Hit"){
            videos = await Video.find().sort({"hit":-1}).lean();
        }if(param == "Like"){
            videos = await Video.find().sort({"like":-1}).lean();
        }
    }

    if(videos){
        console.log(videos)
        res.json(videos);
    }else{
        return res.status(400).json({message: 'No Videos'})
    }
})

const addVideo = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name, title} = req.body
    // const tag = req.body.tag.split(',')

    const duplicate = await Video.findOne({name: name, title: title}).lean()
    if(duplicate){
        console.log(duplicate)
        return res.json({message: 'Dupicate Title'});
    }

    const max = await Video.find({name: name}).count().lean()
    console.log(max)
    if(max==5){
        return res.json({message: 'max'});
    }

    // const videoObject = {"tag":tag,name,title,url,"hit":0,"like":0,"bookmark":0,"created":new Date(),"commentsOpen":true}
    const video = await Video.create(req.body);
    if(video){
        console.log(video)
        return res.status(201).json({message: 'Success'})
    }
    
})

const deleteVideo = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const vid = queryData.vid;
    console.log("&&&")
    console.log(vid)
    console.log( req.url)
    const video = await Video.findByIdAndDelete(vid).lean();
    if(video){
        console.log("####", video)
        return res.status(200).json({message: 'Success'})
    }
})

const updateVideo = asyncHandler(async (req, res) => {
    const {category, name, id, param} = req.body
    let user = [];
    let video = [];
    if(category == "hit"){
        const video = await Video.findByIdAndUpdate(id, { $inc: { "hit" : 1 } }).lean();
    }else if(category == "like"){
        if(param == "like"){
            user = await Profile.findOneAndUpdate({"name": name}, { $addToSet: { "likeVideo" : id } }).lean().exec()
            video = await Video.findByIdAndUpdate(id, 
                { $addToSet: { "likeUser" : name}, $inc: { "like" : 1  }}).lean().exec()
        }else if(param == "dislike"){
            user = await Profile.findOneAndUpdate({"name": name}, { $pull: { "likeVideo" : id } }).lean().exec()
            video = await Video.findByIdAndUpdate(id, 
                { $pull: { "likeUser" : name}, $inc: { "like" : -1  }}).lean().exec()
        }
    }
    return res.status(201).json({message: 'Success'})
})

module.exports = {
    getVideos,
    addVideo,
    updateVideo,
    deleteVideo
}