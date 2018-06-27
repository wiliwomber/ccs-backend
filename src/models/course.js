"use strict";

const mongoose = require('mongoose');

// Define the course schema

const CourseSchema  = new mongoose.Schema({
    titlelong: {
        type: String,
        required: true
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
        required: true
    },
    lecturer: {
        type: String,
        required: true
    },
    chair: {
        type: String,
        required: true
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
    courseType: {
        type: String,
        required: true
    },
    semesterperiodsperweek: {
        type: Number,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    //array machen
    dow: {
        type: [Number],
        required: true
    },
    roomnumber: {
        type: String,
        required: true
    },
    comment: {
        type: [String],
        required: false
    },
    likes: {
        type: Number,
        required: false
    },
    tag: {
        type: String,
        required: false
    },
    public: {
        type: Boolean,
        required: false
    },
});

CourseSchema.set('versionKey', false);
CourseSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Course', CourseSchema);