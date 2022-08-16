const express = require('express');
const router = express.Router();
const { Tags } = require("../models/Tags");
const tagController = require('../controllers/tagController');

router.route('/')
    .get(tagController.getTags)
    .post(tagController.addTag)

module.exports = router;
