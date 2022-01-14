const express = require('express');
const route = express.Router();
const home  = require('./src/controllers/home');
const contact = require('./src/controllers/contact');



route.get('/', home.homePage);
route.post('/', home.trataPost);
route.get('/contact', contact.contactHome);


module.exports = route;