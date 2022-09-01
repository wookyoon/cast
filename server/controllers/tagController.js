const Tags = require('../models/Tags')
const asyncHandler = require('express-async-handler')

const getTags = asyncHandler(async (req, res) => {
    const tags = await Tags.find({}, {"tags":1, "_id":0}).lean();
    console.log(tags)

    if(tags){
        console.log(tags[0])
        res.json(tags[0]);
    }else{
        return res.status(400).json({message: 'No Tags'})
    }
})

const addTag = asyncHandler(async (req, res) => {
    console.log(req.body)
    Tags.updateOne({}, {$addToSet: {tags: req.body.newtag}})
    .updateOne({}, {$push:{count:0}})
    .exec(function (err, tag){
        console.log(tag)
        if(err){
            return res.status(400).json({message: 'failed to add tag'})
        }
        console.log(tag)
        res.send(tag);
    });
})

module.exports = {
    getTags,
    addTag
}

// db.tags.insertOne({tags:["드라마"],count:[0]})

// db.tags.updateOne({},
//     {$addToSet:{tags:"기타"}}
//     )
// db.tags.updateOne({},
//     {$push:{count:0}}
//     )