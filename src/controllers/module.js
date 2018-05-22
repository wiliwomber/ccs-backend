"use strict";

const ModuleModel = require('../models/module');


const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ModuleModel.create(req.body)
        .then(module => res.status(201).json(module))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    ModuleModel.findById(req.params.id).exec()
        .then(module => {

            if (!module) return res.status(404).json({
                error: 'Not Found',
                message: `Movie not found`
            });

            res.status(200).json(module)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ModuleModel.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true}).exec()
        .then(module => res.status(200).json(module))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    ModuleModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Module with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {
    ModuleModel.find({}).exec()
        .then(modules => res.status(200).json(modules))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};



module.exports = {
    create,
    read,
    update,
    remove,
    list
};