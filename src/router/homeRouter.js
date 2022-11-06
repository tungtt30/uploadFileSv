

const HomeController = require('../controller/homeController')
const express = require('express');
const router = express.Router();

router.get('/', HomeController.test)
router.get('/home', HomeController.getHome)





module.exports = router