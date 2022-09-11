const Profile = require("../models/Profile");
const asyncHandler = require('express-async-handler')
var url = require('url');

const createUser = asyncHandler(async (req, res) => {
    const {name} = req.body
    // const tag = req.body.tag.split(',');
    // console.log(insta,facebook,youtube);

    const exist = await Profile.findOne({name: name}).lean().exec()
    if(exist){
        return res.json({message: 'exist'});
    }

    // const userObject = {name,email,"tag":tag,imgUrl,"sns":{"insta":insta, "facebook":facebook, "youtube":youtube},info,"followersNum":0}
    const user = await Profile.create(req.body);
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
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.name)
    
    const user = await Profile.findOne({name:queryData.name}).lean().exec()
    if(user){
        console.log(user)
        return res.json(user);
    }else{
        return res.json({message: "not exist"});
    }
})

const updateUser = asyncHandler(async (req, res) => {
    const {category, name, loginname, param} = req.body
    console.log(category, name, loginname, param)
    if(param == "like"){
        user = await Profile.findOneAndUpdate({"name": name}, { $addToSet: { "likedUser" : loginname } }).lean().exec()
        console.log(name, user)
        loginuser = await Profile.findOneAndUpdate({"name": loginname}, { $addToSet: { "likeUser" : name } }).lean().exec()
        console.log(loginname, loginuser)
       }else if(param == "dislike"){
        user = await Profile.findOneAndUpdate({"name": name}, { $pull: { "likedUser" : loginname } }).lean().exec()
        loginuser = await Profile.findOneAndUpdate({"name": loginname}, { $pull: { "likeUser" : name } }).lean().exec()
      }

    return res.json({message: "not exist"});

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