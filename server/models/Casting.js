const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 모집인원 / 출연료/모집성별 마감일 / 제작 / 기획 /장르
// 동기 300자 제한
const castingSchema = new Schema({
    tag:[String],
    name:{type:String},
    title:{type:String},
    role:{type:String},   
    summary:{type:String},
    category:{type:Number},// 단편:0, 장편:1, 기타:2
    created:{type:Date},
    shootingDate:{type:Date},
    dDay:{type:Date},
    place:{type:String},
    production:{type:String},
    director:{type:String},
    intention:{type:String},
    note:{type:String},
    apply:[{
        save:{type:Number}, // save:0, apply:1
        name:{type:String},
        motivation:{type:String},
        pf:{type:String},
        reply:{type:String}
    }]
});

module.exports = mongoose.model('Casting',castingSchema);