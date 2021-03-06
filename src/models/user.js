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
        type: Number,
        required: false
    },
    studentsemester: {
        type: Number,
        required: false
    }
});

UserSchema.set('versionKey', false);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);