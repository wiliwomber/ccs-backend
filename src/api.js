"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth  = require('./routes/auth');
const course = require('./routes/course');

const api = express();


//adding basic middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);



//basic route
api.get('/', (req, res) => {
    res.json({
        name: 'ccs-backend'
    });
});

//API routes
api.use('/auth'  , auth);
api.use('/courses', course);

module.exports = api;