"use strict";

//configuration variables
const port      = process.env.PORT        || '3000';
const mongoURI  = process.env.MONGODB_URI || 'mongodb://localhost:27017/coursedb';
const JwtSecret = process.env.JWT_SECRET  ||'very secret secret';

module.exports = {
    port,
    mongoURI,
    JwtSecret,
};