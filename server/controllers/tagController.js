const Tags = require('../models/Tags')
const asyncHandler = require('express-async-handler')

const getTags = asyncHandler(async (req, res) => {
    const tags = await Tags.find().lean();

    if(tags){
        res.json(tags[0]);
    }else{
        return res.status(400).json({message: 'No Tags'})
    }
})

const addTag = asyncHandler(async (req, res) => {
    
    Tags.updateOne({}, {$addToSet: {tags: req.body.newtag}}).lean()
    .exec(function (err, tags){
        if(err){
            return res.status(400).json({message: 'failed to add tag'})
        }
        console.log(tags);
        res.send(tags);
    });

    
})

module.exports = {
    getTags,
    addTag
}