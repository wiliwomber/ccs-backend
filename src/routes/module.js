"use strict";

const express  = require('express');
const router   = express.Router();

const ModuleController = require('../controllers/module');

console.log("Routes geschaft")

router.get('/', ModuleController.list); // List all movies
router.post('/', ModuleController.create); // Create a new movie
router.get('/:id', ModuleController.read); // Read a movie by Id
router.put('/:id', ModuleController.update); // Update a movie by Id
router.delete('/:id', ModuleController.remove); // Delete a movie by Id


module.exports = router;