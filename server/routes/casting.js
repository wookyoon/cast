const express = require('express');
const router = express.Router();
const castingController = require('../controllers/castingController')

router.route('/')
    .get(castingController.getCasting)
    .post(castingController.createCasting)
    .patch(castingController.updateCasting)
    .delete(castingController.deleteCasting)

module.exports = router;
