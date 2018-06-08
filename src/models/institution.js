"use strict";

const mongoose = require('mongoose');

// Define the institution schema


const institutionSchema  = new mongoose.Schema({
    institutionid: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});

institutionSchema.set('versionKey', false);
institutionSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Institution', institutionSchema);