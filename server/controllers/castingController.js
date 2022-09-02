const Casting = require("../models/Casting");
const asyncHandler = require('express-async-handler')
var url = require('url');

const getCasting = asyncHandler(async (req, res) => {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    const category = queryData.category;
    const param = queryData.param;
    var castings = []
    
    if(category == "전체" && param == 0){
        castings = await Casting.find().lean();
    }else if(category == 0){
        const tags = param.split(",");
        console.log(tags)
        castings = await Casting.find({tag: { $in: tags }}).lean();
    }else if(param ==0){
        castings = await Casting.find({category : category}).lean();
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

})

const deleteCasting = asyncHandler(async (req, res) => {

})

module.exports = {
    getCasting,
    createCasting,
    updateCasting,
    deleteCasting
}