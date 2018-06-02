"use strict";

const express  = require('express');
const router   = express.Router();

const CourseConroller = require('../controllers/course');


router.get('/', CourseConroller.list); // List all movies
router.post('/', CourseConroller.create); // Create a new movie
router.get('/:id', CourseConroller.read); // Read a movie by Id
router.put('/:id', CourseConroller.update); // Update a movie by Id
router.delete('/:id', CourseConroller.remove); // Delete a movie by Id


module.exports = router;