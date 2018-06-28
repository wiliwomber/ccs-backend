"use strict";

const mongoose = require('mongoose');



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
    semester: {
        type: Number,
        required: true,
    },
    courseOfStudies: {
      type: String,
      required: false
    },
    chosenCourses: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CourseSchema'
        },
        semester: {
            type: Number
        }
    }],

});

UserSchema.set('versionKey', false);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);