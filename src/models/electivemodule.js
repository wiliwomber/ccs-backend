"use strict";

const mongoose = require('mongoose');

// Define the elective module schema

const electivemoduleSchema  = new mongoose.Schema({
    //ID von course und studyprogram nötig zur Verknüpfung
    courseid: {
        type: Number,
        required: true
    },
    studyprogramid: {
        type: Number,
        required: true
    },
    eligible: {
        type: Boolean,
        required: true
    },
    recommendedsemester: {
        type: Number,
        required: true
    },
    electivemoduleid: {
        type: Number,
        required: true
    }
});

electivemoduleSchema.set('versionKey', false);
electivemoduleSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Elective Module', electivemoduleSchema);