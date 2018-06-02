"use strict";

const mongoose = require('mongoose');

// Define the compulsory module schema

const compulsorymoduleSchema  = new mongoose.Schema({
    //ID von course und study program nötig zur Verknüpfung
    courseid: {
        type: number,
        required: true
    },
    studyprogamid: {
        type: number,
        required: true
    },
    obligation: {
        type: boolean,
        required: true
    },
    recommendedsemester: {
        type: number,
        required: true
    },
    compulsorymoduleid: {
        type: number,
        required: true
    }
});

CompulsorymoduleSchema.set('versionKey', false);
CompulsorymoduleSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Compulsorymodule', CompulsorymoduleSchema)