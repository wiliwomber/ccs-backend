"use strict";

const mongoose = require('mongoose');

// Define the compulsory module schema

const compulsorymoduleSchema  = new mongoose.Schema({
    //ID von course und study program nötig zur Verknüpfung
    courseid: {
        type: Number,
        required: true
    },
    studyprogamid: {
        type: Number,
        required: true
    },
    obligation: {
        type: Boolean,
        required: true
    },
    recommendedsemester: {
        type: Number,
        required: true
    },
    compulsorymoduleid: {
        type: Number,
        required: true
    }
});

CompulsorymoduleSchema.set('versionKey', false);
CompulsorymoduleSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Compulsorymodule', CompulsorymoduleSchema);