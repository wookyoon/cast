const express = require('express');
const { trusted } = require('mongoose');
const router = express.Router();
const { VideoTags} = require("../models/VideoTags");

router.post("/add",   (req, res) => {
    
    tags = req.body.tags.split(',');
    VideoTags.addVideo(tags, req.body);

    return res.status(200).json({
        success: true
    });
    
});

router.post("/title/exist", (req, res) => {
    var email = req.body.email;
    var title = req.body.title+".mp4";
    const AWS = require('aws-sdk');
    const s3 = new AWS.S3();
    
    AWS.config.update({
        region: 'ap-northeast-2',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    keys = [];
    flag=0;
    const listAllKeys = (params, out=[]) => new Promise((resolve, reject) => {
      s3.listObjectsV2(params).promise()
        .then(({Contents, IsTruncated, NextContinuationToken}) => {
          out.push(...Contents);
          try{
            Contents.forEach(function(obj,index) {
                if (obj.Key.split('/')[2] == title){
                    throw new Error("stop loop");
                }
              })
          }catch(e){ 
              return res.json({
                exist: true
            });
          }
          !IsTruncated ? resolve(out) : resolve(listAllKeys(Object.assign(params, {ContinuationToken: NextContinuationToken}), out));
        })
        .catch(reject);
    });
    
    listAllKeys({Bucket: 'mern-feedback', Delimiter: '', Prefix: 'videos/'+email})
    .then(()=>{
        return res.json({
            exist: false
        });
    })
    .catch();

    

    // VideoTags.find({"videos.email":req.body.email}).find({"videos.title":req.body.title}, (err, doc) => {
    //     if(doc.length==0){
    //         console.log("zero")
    //         return res.json({
    //             exist: false
    //         });
    //     }else{
    //         return res.json({
    //             exist: true
    //         });
    //     }
    // });
});

router.post("/get/byEmail",   (req, res) => {
   
    videos =[]
    VideoTags.aggregate([{  
        $project : {
            _id:0,
            videos : {
               $filter: {
                  input : "$videos",
                  as: "videos",
                  cond : {
                        $eq: ["$$videos.email", req.body.email ] 
                  }
               }
            }
        }
    }] , (err, docs) =>{
        if(docs){
            for (var d of docs){
                videos.push(...d.videos)
            }
            // console.log(videos);
            res.send({ videos });
        }
        else{
            console.log(err);
            return res.json({
                error: err
            });
        }
    })
});

router.post("/get/byTag",   (req, res) => {
   
    VideoTags.find({tagname:req.body.tag}, {_id:0, tagname:1, videos:1}, (err, docs) =>{
        if(docs){
            // console.log("####",docs[0].videos);
            // for (var d of docs){
            //     videos.push(...d.videos)
            // }
            docs = docs[0]
            console.log(docs)
            res.send({docs});

        }
        else{
            console.log(err);
            return res.json({
                error: err
            });
        }
    })
});

router.post("/get", async (req, res) => {
    tags = req.body.tags.split(',');
    docs = [];
    
    for (let tag of tags){
        await VideoTags.find({tagname:tag}, {_id:0,tagname:1, videos:1}, (err, re) =>{
            console.log(tag)
            if(re){
                docs.push(re[0]);
            }
        }).clone()
        .catch(function(err){ console.log(err)})
    }

    res.send({docs});
    

});

// db.videotags.aggregate([  {
//     "$project" : {
//         "videos" : {
//            "$filter" : {
//               "input" : "$videos",
//               "as" : "videos",
//               "cond" : {
//                     "$eq" : [ "$$videos.email", "hjuuujh@gmail.com" ] 
//               }
//            }
//         }
//     }
//  }]).pretty();
module.exports = router;