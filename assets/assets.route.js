const express = require('express');
const { list, upload } = require('./assets.controller');

const assetRoute = express.Router();

assetRoute.get('/', list);
assetRoute.post('/upload', upload);

module.exports = assetRoute;
