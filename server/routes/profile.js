const express = require('express');
const router = express.Router();
const { Profile } = require("../models/Profile");

router.post("/exist", (req, res) => {
    
    Profile.findOne({ email: req.body.email }, (err, user) => {
        if (!user){
            return res.json({
                exist: false
            });
        }else{
            // console.log('exist');
            return res.json({
                exist: true
            });
        }
    });
            
    
});

router.post("/create", (req, res) => {
    
    const profile = new Profile(req.body);

    profile.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });

    
});

// below rud

module.exports = router;