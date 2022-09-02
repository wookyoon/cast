const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 모집인원 / 출연료/모집성별 마감일 / 제작 / 기획 /장르
// 동기 300자 제한
const castingSchema = new Schema({
    tag:[String],
    name:{type:String},
    title:{type:String},
    genre:{type:String},
    geder:{type:String},
    role:{type:String},   
    category:{type:String},// 단편:0, 장편:1, 기타:2
    created:{type:String},
    shootingDate:{type:String},
    dDay:{type:String},
    location:{type:String},
    production:{type:String},
    director:{type:String},
    explanation:{type:String},
    roleExplanation:{type:String},
    note:{type:String},
    apply:[{
        save:{type:Number}, // save:0, apply:1
        name:{type:String},
        motivation:{type:String},
        reply:{type:String},
        result:{type:Number} // fail 나오면 바로 삭제
    }]
});

module.exports = mongoose.model('Casting',castingSchema);