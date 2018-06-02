"use strict";

const mongoose = require('mongoose');

// Define the study program schema

const studyprogramSchema  = new mongoose.Schema({
    //facultyid nötig zur Verknüpfung
    facultyid: {
        type: Number,
        required: true
    },
    studyprogramid: {
        type: number,
        required: true
    },
    title: {
        type: string,
        required: true
    },
});

StudyprogramSchema.set('versionKey', false);
StudyprogramSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Studyprogram', StudyprogramSchema)