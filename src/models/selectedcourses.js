"use strict";

const mongoose = require('mongoose');
const CourseModel = require('./app/models/course');

// Define the selected course module schema


const selectedCoursesSchema  = new mongoose.Schema({

    matriculation: {
        type: Number,
        required: true
    },
    selectedcourseslist: [{ matriculation: Number, courseid: Number}]
});


selectedCoursesSchema.set('versionKey', false);
selectedCoursesSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('SelectedCourses', selectedCoursesSchema);
