"use strict";

const mongoose = require('mongoose');

// Define the course schema

const CourseSchema  = new mongoose.Schema({
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
    courseType: {
        type: String,
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
    day: {
        type: String,
        required: false
    },
    end: {
        type: String,
        required: false
    },
    //array machen
    dow: {
        type: [Number],
        required: false
    },
    roomnumber: {
        type: String,
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
    },
    selectedSemester: {
        type: String,
        required: false,
    }
});

CourseSchema.set('versionKey', false);
CourseSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Course', CourseSchema);