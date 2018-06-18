"use strict";

const mongoose = require('mongoose');

// Define the user schema
const SelectedCourseSchema  = new mongoose.Schema({
    titlelong: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    semester: {
        type: String,
        required: false
    },
    lecturer: {
        type: String,
        required: false
    },
    chair: {
        type: String,
        required: false
    },
    registrationstart: {
        type: String,
        required: false
    },
    registrationend: {
        type: String,
        required: false
    },
    exam: {
        type: String,
        required: false
    },
    repeatexam: {
        type: String,
        required: false
    },
    practicecourse: {
        type: Boolean,
        required: false
    },
    semesterperiodsperweek: {
        type: Number,
        required: false
    },
    start: {
        type: String,
        required: false
    },
    end: {
        type: String,
        required: false
    },
    //array machen
    dow: {
        type: String,
        required: false
    },
    roomnumber: {
        type: Number,
        required: false
    },
    participatorrestriction: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    tag: {
        type: String,
        required: false
    },
    public: {
        type: Boolean,
        required: false
    }
});


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
        type: String,
        required: true,
    },
    selectedCourses:
        [{SelectedCourseSchema}],

});

UserSchema.set('versionKey', false);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);