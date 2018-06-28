"use strict";
const express          = require("express");
const router           = express.Router();
const courseController = require("../controllers/course");


router.get("/", courseController.list); // List all course
router.post("/", courseController.create); // Create a new course
router.get("/:id", courseController.read); // Read a course by Id
router.put("/:id", courseController.update); // Update a course by Id
router.delete("/:id", courseController.remove); // Delete a course by Id
router.get("/", courseController.readTag); // List all courses by Tag


module.exports = router;

