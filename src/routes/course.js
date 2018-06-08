"use strict";

const express  = require('express');
const router   = express.Router();

const CourseController = require('../controllers/course');


router.get('/', CourseController.givecourseslist); // List all courses
router.post('/', CourseController.create); // Create a new course
router.get('/:id', CourseController.givecoursesbyId); // Give a course by Id
router.put('/:id', CourseController.update); // Update a course by Id
router.delete('/:id', CourseController.remove); // Delete a course by Id
router.get('/:id', CourseController.findselectedcourses); // List all selected courses by Matriculation
router.post('/', CourseController.addtoselectedcourses); // Add Course to selected Courses
router.delete('/', CourseController.removefromselectedcourses); // Remove Course from selected Courses

module.exports = router;