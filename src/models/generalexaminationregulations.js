"use strict";

const mongoose = require('mongoose');

// Define the general examination regulations schema


const generalexaminationregulationsSchema  = new mongoose.Schema({
    //ID von intitutionid nötig zur Verknüpfung
    institutionid: {
        type: number,
        required: true
    },
    generalachievablecredits: {
        type: number,
        required: true
    },
    generalcredithurdles: {//Anders designen
        type: number,
        required: true
    }
});

GeneralexaminationregulationsSchema.set('versionKey', false);
GeneralexaminationregulationsSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Generalexaminationregulations', GeneralexaminationregulationsSchema)