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
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },

  //  compulsorymodulelist: new mongoose.Array(CourseModel.courseid)({}),
  //  electivemodulelist: new mongoose.Array(CourseModel.courseid)({}),



});

studyprogramSchema.set('versionKey', false);
studyprogramSchema.set('timestamps', true);

// Export the Course model
module.exports = mongoose.model('Study program', studyprogramSchema);