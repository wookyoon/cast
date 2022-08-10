const express = require('express');
const router = express.Router();
const { Tags } = require("../models/Tags");

router.post("/get",   (req, res) => {

    if(req.body.type=="video"){
        Tags.find({}, {_id:0, videotag:1}, (err,doc) => {
            return res.json({
                tags:doc[0].videotag
            });
    })
    } else{
        Tags.find({}, {_id:0, profiletag:1}, (err,doc) => {
            return res.json({
                tags:doc[0].profiletag
            });
    })
    }
});

router.post("/add",   (req, res) => {

    if(req.body.type=="video"){
        Tags.updateOne({}, {$addToSet: {videotag: req.body.newtag}}, (err,doc) => {
            return res.json({
                result:doc
            });
    })
    } else{
        Tags.updateOne({},{$addToSet: {profiletag: req.body.newtag } }, (err,doc) => {
            return res.json({
                result:doc
            });
    })
    }
});

module.exports = router;
