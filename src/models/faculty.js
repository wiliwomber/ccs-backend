"use strict";

const mongoose = require('mongoose');

// Define the faculty schema

const facultySchema  = new mongoose.Schema({
    //Institutionid nötig zur Verknüpfung mit Institution
    institutionid: {
        type: Number,
        required: true
    },
    facultyid: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

FacultySchema.set('versionKey', false);
FacultySchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Faculty', FacultySchema);
