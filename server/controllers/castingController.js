const Casting = require("../models/Casting");
const Profile = require("../models/Profile");
const asyncHandler = require('express-async-handler')
var url = require('url');

const getCasting = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const category = queryData.category;
    const param = queryData.param;
    var castings = []
    console.log("****")
    
    if(category == "all" && param == 0){
        castings = await Casting.find().lean();
    }else if(category == 0){
        const tags = param.split(",");
        console.log(tags)
        castings = await Casting.find({tag: { $in: tags }}).lean();
    }else if(param ==0){
        castings = await Casting.find({category : category}).lean();
    }else if(category=="created"){
        castings = await Casting.find({name : param}).lean();
    }else if(category=="save"){
        user = await Profile.find({name : param},{saveCasting:1}).lean();
        console.log(user)
        castings = await Casting.find({_id : user[0].saveCasting }).lean();
        console.log(castings)
    }else if(category=="apply"){
        user = await Profile.find({name : param},{applyCasting:1}).lean();
        console.log(user)
        castings = await Casting.find({_id : user[0].applyCasting }).lean();
        console.log(castings)
    }

    if(castings){
        console.log(castings)
        res.json(castings);
    }else{
        return res.status(400).json({message: 'No Castings'})
    }
})

const createCasting = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const type = queryData.type;

    if(type=="update"){
        await Casting.findByIdAndDelete(req.body._id).lean();
        const updateCasting = await Casting.create(req.body);
        if(updateCasting){
            console.log(updateCasting);
            return res.status(201).json({message: 'Success'});
        }
    }else if(type=="new"){
        const newCasting = await Casting.create(req.body);
        if(newCasting){
            console.log(newCasting);
            return res.status(201).json({message: 'Success'});
        }
    }
})


const updateCasting = asyncHandler(async (req, res) => {
    // console.log(req.body)

    const {name, id, save, motivation, reply, type, rid} = req.body
    console.log(req.body)

    // 임시저장인경우
    if(type=="temp"){
        const temp = await Casting.findOneAndUpdate({_id : id, "apply.name":name},{$set: {"apply.$":{save:save, name:name, motivation:motivation}}}).lean();
        console.log(temp);
        if(save=="apply"){
            await Profile.findOneAndUpdate({"name": name}, { $pull: { "saveCasting" : id } }).lean().exec()
            await Profile.findOneAndUpdate({"name": name}, { $push: { "applyCasting" : id } }).lean().exec()
        }
        return res.status(200).json({message: "find"});
    }

    // 결과
    if(type=="reply"){
        console.log("reply");
        // const casting = await Casting.findOne({_id : id, "apply._id":rid}).lean();

        const casting = await Casting.findOneAndUpdate({_id : id, "apply._id":rid},{$set: {"apply.$.save":"reply","apply.$.reply": reply}}).lean();
        console.log(casting);
        if(casting){
            return res.status(200).json({message: "reply success"});
        }else{
            return res.status(200).json({message: "reply fail"});
        }
    }
    
    // 처음 지원하는 경우 
    // 이미 지원/신청했는지 확인
    const duplicate = await Casting.findOne({_id : id, "apply.name":name},{"apply.$":1}).lean();
    if(duplicate){
        console.log("@@@", duplicate.apply[0].save)
        if(duplicate.apply[0].save == "save"){
            return res.status(200).json({message: "already save"});
        }else if(duplicate.apply[0].save == "apply"){
            return res.status(200).json({message: "already apply"});
        }
    }

    // 본인이 올린 캐스팅인지 확인
    const created = await Casting.findOne({_id : id, "name":name}).lean();
    if(created){
        console.log("@", created)
        return res.status(200).json({message: "created"});
    }

    // 캐스팅 지원/신청
    const casting = await Casting.findByIdAndUpdate(id, { $push: { "apply" : req.body } }).lean().exec()
    if (save=="save"){
        await Profile.findOneAndUpdate({"name": name}, { $push: { "saveCasting" : id } }).lean().exec()
    }else if(save == "apply"){
        await Profile.findOneAndUpdate({"name": name}, { $push: { "applyCasting" : id } }).lean().exec()
    }

    if(casting){
        // console.log(casting)
        return res.status(201).json({message: 'Success'});
    }
})

const deleteCasting = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const type = queryData.type;
    const cid = queryData.cid;
    const name = queryData.name;
    console.log(type, name, cid)

    if(type=="create"){
        await Casting.findByIdAndDelete(cid).lean();
    }else if(type=="save"){
        await Casting.findOneAndUpdate({_id : cid, "apply.name":name},{$pull: {apply:{name:name}}}).lean();
    }

    const profile = await Profile.findOneAndUpdate({"name": name}, { $pull: { "saveCasting" : cid } }).lean().exec()

    if(profile){
        console.log("####", profile)
        return res.status(200).json({message: 'Success'})
    }
})

module.exports = {
    getCasting,
    createCasting,
    updateCasting,
    deleteCasting
}