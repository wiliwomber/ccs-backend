"use strict";
const mongoose = require("mongoose");


const courseSchema  = new mongoose.Schema({

    titleLong: {
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
        required: false
    },
    semesterPeriodsPerWeek: {
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
    dow: {
        type: [Number],
        required: false
    },
    roomNumber: {
        type: String,
        required: false
    },
    participatorRestriction: {
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
        type: Number,
        required: false,
    }
});

courseSchema.set("versionKey", false);
courseSchema.set("timestamps", true);

// Export the Movie model
module.exports = mongoose.model("course", courseSchema);