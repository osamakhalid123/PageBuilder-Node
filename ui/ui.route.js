const express = require('express');
const { editor, home } = require('./ui.controller');

const uiRoute = express.Router();

uiRoute.get('/', home);
uiRoute.get('/editor/:pageId', editor);
// uiRoute.all('*', (req, res) => {
//   res.send('Error, 404 - Pgae not found!');
// });

module.exports = uiRoute;
