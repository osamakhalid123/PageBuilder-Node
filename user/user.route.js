const express = require('express');
const { list, details, create, update, deleteUserRecord } = require('./user.controller');

const userRoute = express.Router();

userRoute.get('/', list);
userRoute.get('/:userId', details);

userRoute.post('/', create);
userRoute.patch('/:userId', update);
userRoute.delete('/:userId', deleteUserRecord);

module.exports = userRoute;
