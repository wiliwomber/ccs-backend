"use strict";

const mongoose = require('mongoose');

// define the course schema

const CourseSchema  = new mongoose.Schema({
    courseid: {
        type: Number,
        required: true
    },
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
        type: Date,
        required: true
    },
    registrationend: {
        type: Date,
        required: true
    },
    exam: {
        type: Date,
        required: true
    },
    repeatexamatendofsemester: {
        type: Boolean,
        required: true
    },
    repeatexamatnextsemester: {
        type: Boolean,
        required: true
    },
    practicecourse: {
        type: Boolean,
        required: true
    },
    semesterperiodsperweek: {
        type: Number,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    dow: {
        type: Number,
        required: true
    },
    roomnumber: {
        type: Number,
        required: true
    },
    participatorrestriction: {
        type: Number,
        required: true
    },
    evaluation: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        required: true
    }
});

CourseSchema.set('versionKey', false);
CourseSchema.set('timestamps', true);

// Export the Course model
module.exports= mongoose.model('Course', CourseSchema);
