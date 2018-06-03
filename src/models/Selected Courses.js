"use strict";

const mongoose = require('mongoose');

// Define the selected courses module schema

const selectedcoursesSchema  = new mongoose.Schema({
    //ID von course und student nötig zur Verknüpfung
    courseid: {
        type: Number,
        required: true
    },
    matriculation: {
        type: Number,
        required: true
    }
});

selectedcoursesSchema.set('versionKey', false);
selectedcoursesSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('SeclectedCourses', selectedcoursesSchema);