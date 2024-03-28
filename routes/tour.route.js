const express = require("express");
const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.get('/', tourController.getAllTour)

router.post('/', tourController.addOne)

module.exports = router;