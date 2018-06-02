"use strict";

const mongoose = require('mongoose');

// Define the examination regulations schema

const examinationregulationsSchema  = new mongoose.Schema({
    //ID von study program nötig zur Verknüpfung
    studyprogramid: {
        type: Number,
        required: true
    },
    achievablecredits: {
        type: Number,
        required: true
    },
    credithurdles: { //muss anders designed werden, evtl eigenes Objekt und Verknüpfung? weil Semester zur Credithurdle verknüpft werden muss
        type: Number,
        required: true
    },
    constraints: {
        type: String,
        required: true
    }
});

ExaminationregulationSchema.set('versionKey', false);
ExaminationregulationSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Examinationregulation', ExaminationregulationSchema)