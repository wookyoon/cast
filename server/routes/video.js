const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController')

router.route('/')
    .get(videoController.getVideos)
    .post(videoController.addVideo)
    .patch()
    .delete(videoController.deleteVideo)

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

// db.videotags.aggregate([  {
//     "$project" : {
//         "videos" : {
//            "$filter" : {
//               "input" : "$videos",
//               "as" : "videos",
//               "cond" : {
//                 $regexMatch: {
//                     input: "$$videos.title",
//                     regex: /r/, options: 'i'
//                   }
//               }
//            }
//         }
//     }
//  }]).pretty();

// db.videotags.aggregate([ 
//     {
//         "$project" : {
//            "videos" : {
//               "$filter" : {
//                  "input" : "$videos",
//                  "as" : "videos",
//                  "cond" : {
//                    $regexMatch: {
//                        input: "$$videos.title",
//                        regex: /e/, options: 'i'
//                      }
//                  }
//               }
//            }
//         }
//         },
//     {$unwind:"$videos"}
  
// ]).pretty();

module.exports = router;

