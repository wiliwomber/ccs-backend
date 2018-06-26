"use strict";

const express  = require('express');
const router   = express.Router();

const CourseController = require('../controllers/course');


router.get('/', CourseController.list); // List all course
router.post('/', CourseController.create); // Create a new course
router.get('/:id', CourseController.read); // Read a course by Id
router.put('/:id', CourseController.update); // Update a course by Id
router.delete('/:id', CourseController.remove); // Delete a course by Id
router.get('/', CourseController.readTag); // List all courses by Tag
//router.get ('/', CourseController.listByTitle); // List all courses by Title

module.exports = router;

