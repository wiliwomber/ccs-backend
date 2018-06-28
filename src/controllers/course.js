"use strict";
const courseModel = require("../models/course");


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: "Bad Request",
        message: "The request body is empty"
   });

    courseModel.create(req.body)
        .then(course => {res.status(201).json(course)})
        .catch(error => {
            res.status(500).json({
                error: "Internal server error",
                message: error.message

           });
            console.log(error);

       });
};


const read   = (req, res) => {
    courseModel.findById(req.params.id).exec()
        .then(course => {

            if (!course) return res.status(404).json({
                error: "Not Found",
                message: `Course not found`
           });

            res.status(200).json(course)

       })
        .catch(error => res.status(500).json({
            error: "Internal Server Error",
            message: error.message
       }));
};


const update = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: "Bad Request",
        message: "The request body is empty"
   });

    courseModel.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true}).exec()
        .then(course => res.status(200).json(course))
        .catch(error => res.status(500).json({
            error: "Internal server error",
            message: error.message
       }));
};


const remove = (req, res) => {
    courseModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Module with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: "Internal server error",
            message: error.message
       }));
};


const list  = (req, res) => {
    courseModel.find({}).exec()
        .then(courses => res.status(200).json(courses))
        .catch(error => res.status(500).json({
            error: "Internal server error",
            message: error.message
       }));
};


const readTag   = (req, res) => {
    courseModel.find({"tag": "req"}).exec()
        .then(courses => res.status(200).json(courses))
        .catch(error => res.status(500).json({
            error: "Internal server error",
            message: error.message
       }));
};


module.exports = {
    create,
    read,
    update,
    remove,
    list,
    readTag,
};

