"use strict";
const mongoose = require("mongoose");


const courseSchema  = new mongoose.Schema({

    titleLong: {
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
    registrationStart: {
        type: String,
        required: false
    },
    registrationEnd: {
        type: String,
        required: false
    },
    exam: {
        type: String,
        required: false
    },
    repeatExam: {
        type: String,
        required: false
    },
    courseType: {
        type: String,
        required: true
    },
    semesterPeriodsPerWeek: {
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
    dow: {
        type: [Number],
        required: true
    },
    roomNumber: {
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

courseSchema.set("versionKey", false);
courseSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("course", courseSchema);