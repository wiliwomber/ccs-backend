"use strict";

const mongoose = require('mongoose');

// Define the user schema


const UserSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    matriculation: {
        type: number,
        required: true
    },
    studentsemester: {
        type: number,
        required: true
    }
});

UserSchema.set('versionKey', false);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);