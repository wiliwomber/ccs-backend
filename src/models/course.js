"use strict";

const mongoose = require('mongoose');

// Define the course schema

const CourseSchema  = new mongoose.Schema({
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

CourseSchema.set('versionKey', false);
CourseSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Course', CourseSchema);