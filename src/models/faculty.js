"use strict";

const mongoose = require('mongoose');

// Define the faculty schema

const facultySchema  = new mongoose.Schema({
    //Institutionid nötig zur Verknüpfung mit Institution
    institutionid: {
        type: number,
        required: true
    },
    facultyid: {
        type: number,
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
module.exports = mongoose.model('Faculty', FacultySchema)