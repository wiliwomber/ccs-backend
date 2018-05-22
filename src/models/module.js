"use strict";

const mongoose = require('mongoose');

// Define the movie schema

const ModuleSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    description: {
       type: String,
       required: true
    }
});

ModuleSchema.set('versionKey', false);
ModuleSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Module', ModuleSchema);