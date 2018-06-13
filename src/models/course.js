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
        type: Date,
        required: false
    },
    registrationend: {
        type: Date,
        required: false
    },
    exam: {
        type: Date,
        required: false
    },
    repeatexamatendofsemester: {
        type: Boolean,
        required: false
    },
    repeatexamatnextsemester: {
        type: Boolean,
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
        type: Date,
        required: false
    },
    end: {
        type: Date,
        required: false
    },
    dow: {
        type: Number,
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
    evaluation: {
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

CourseSchema.set('versionKey', false);
CourseSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Course', CourseSchema);