"use strict";
const mongoose = require("mongoose");



const UserSchema  = new mongoose.Schema({
    
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    semester: {
        type: String,
        required: true,
    },
    chosen: {
    },
    chosenCourses: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "courseSchema"
        },
        semester: {
            type: Number
        }
    }],
});

userSchema.set("versionKey", false);

// Export the Movie model
module.exports = mongoose.model("user", userSchema);