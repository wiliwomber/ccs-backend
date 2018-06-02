"use strict";

const mongoose = require('mongoose');

// Define the elective module schema

const electivemoduleSchema  = new mongoose.Schema({
    //ID von course und studyprogram nötig zur Verknüpfung
    courseid: {
        type: number,
        required: true
    },
    studyprogramid: {
        type: number,
        required: true
    },
    eligible: {
        type: boolean,
        required: true
    },
    recommendedsemester: {
        type: number,
        required: true
    },
    electivemoduleid: {
        type: number,
        required: true
    }
});

ElectivemoduleSchema.set('versionKey', false);
ElectivemoduleSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Electivemodule', ElectivemoduleSchema)