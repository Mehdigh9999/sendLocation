const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

const controllers = require('../controllers/location');

router.get('/locate', controllers.renderLocatePage);
router.post('/locate', controllers.receiveLocation);

module.exports = router;
