const Profile = require("../models/Profile");
const asyncHandler = require('express-async-handler')
var url = require('url');

const createUser = asyncHandler(async (req, res) => {
    const {name, email, imgUrl, insta,facebook, youtube, info} = req.body
    const tag = req.body.tag.split(',');
    console.log(insta,facebook,youtube);

    const exist = await Profile.findOne({name: name}).lean().exec()
    if(exist){
        return res.json({message: 'exist'});
    }

    const userObject = {name,email,"tag":tag,imgUrl,"sns":{"insta":insta, "facebook":facebook, "youtube":youtube},info,"followersNum":0}
    const user = await Profile.create(userObject);
    if(user){
        console.log(user);
        return res.status(201).json({message: 'Success', name:name});
    }
})

const getEmail = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    
    const exist = await Profile.findOne({email:queryData.email}).lean().exec()
    if(exist){
        console.log("exist")
        return res.json({message: "exist", name:exist.name});
    }else{
        console.log("not exist")
        return res.json({message: "not exist"});
    }
})

const getUser = asyncHandler(async (req, res) => {

})

const updateUser = asyncHandler(async (req, res) => {

})

const deleteUser = asyncHandler(async (req, res) => {

    // 게시글 다지워야 계정삭제가능 or 계정삭제하면 다 지워주기
})

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getEmail
}