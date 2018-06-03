"use strict";

const mongoose = require('mongoose');

// Define the general examination regulations schema


const generalexaminationregulationsSchema  = new mongoose.Schema({
    //ID von intitutionid nötig zur Verknüpfung
    institutionid: {
        type: Number,
        required: true
    },
    generalachievablecredits: {
        type: Number,
        required: true
    },
    generalcredithurdles: {//Anders designen
        type: Number,
        required: true
    }
});

GeneralexaminationregulationsSchema.set('versionKey', false);
GeneralexaminationregulationsSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Generalexaminationregulations', GeneralexaminationregulationsSchema);