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
    
    if(category == "전체" && param == 0){
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
    console.log(req.body)
    const casting = await Casting.create(req.body);
    if(casting){
        console.log(casting);
        return res.status(201).json({message: 'Success'});
    }
})


const updateCasting = asyncHandler(async (req, res) => {
    // console.log(req.body)

    const {name, id, save} = req.body
    const duplicate = await Casting.findOne({_id : id, "apply.name":name},{"apply.$":1}).lean();
    
    if(duplicate){
        console.log("@@@", duplicate.apply[0].save)
        if(duplicate.apply[0].save == "save"){
            return res.status(200).json({message: "already save"});
        }else if(duplicate.apply[0].save == "apply"){
            return res.status(200).json({message: "already apply"});
        }
    }

    const created = await Casting.findOne({_id : id, "name":name}).lean();
    if(created){
        console.log("@", created)
        return res.status(200).json({message: "created"});
    }


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

})

module.exports = {
    getCasting,
    createCasting,
    updateCasting,
    deleteCasting
}