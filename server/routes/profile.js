const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.route('/')
    .get(userController.getUser)
    .post(userController.createUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/exist')
    .get(userController.getEmail)


// router.post("/exist", (req, res) => {
    
//     Profile.findOne({ email: req.body.email }, (err, doc) => {
//         if (!doc){
//             return res.json({
//                 exist: false
//             });
//         }else{
//             // console.log('exist');
//             return res.json({
//                 exist: true
//             });
//         }
//     });
// });

// router.post("/set", (req, res) => {
//     console.log("###",req.body.email );
    
//     Profile.findOne({ email: req.body.email }, (err, doc) => {
//         if (doc){
//             console.log(doc);
//             res.send({doc});
//         }
//     });
// });

// router.post("/name/exist", (req, res) => {
    
//     Profile.findOne({ name: req.body.name }, (err, doc) => {
//         if (!doc){
//             return res.json({
//                 exist: false
//             });
//         }else{
//             return res.json({
//                 exist: true
//             });
//         }
//     });
// });

// router.post("/create", (req, res) => {
    
//     const profile = new Profile(req.body);

//     profile.save((err, doc) => {
//         if (err) return res.json({ success: false, err });
//         return res.json({
//             success: true
//         });
//     });
// });

module.exports = router;