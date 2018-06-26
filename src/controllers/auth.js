"use strict";

const jwt        = require('jsonwebtoken');
const bcrypt     = require('bcryptjs');

const config     = require('../config');
const UserModel  = require('../models/user');
const CourseModel  = require('../models/course');


const login = (req,res) => {
    if (!Object.prototype.hasOwnProperty.call(req.body, 'password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password property'
    });

    if (!Object.prototype.hasOwnProperty.call(req.body, 'username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username property'
    });


    UserModel.findOne({username: req.body.username}).exec()
        .then(user => {

            // check if the password is valid
            const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
            if (!isPasswordValid) return res.status(401).send({token: null });

            // if user is found and password is valid
            // create a token
            const token = jwt.sign({ id: user._id, username: user.username, semester: user.semester, selectedCourses: user.selectedCourses }, config.JwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({token: token});

        })
        .catch(error => res.status(404).json({
            error: 'User Not Found',
            message: error.message
        }));

};


const register = (req,res) => {

    if (!Object.prototype.hasOwnProperty.call(req.body, 'password')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a password property'
    });

    if (!Object.prototype.hasOwnProperty.call(req.body, 'username')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a username property'
    });

    if (!Object.prototype.hasOwnProperty.call(req.body, 'semester')) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body must contain a semester property'
    });

    const user = Object.assign(req.body, {password: bcrypt.hashSync(req.body.password, 8)});


    UserModel.create(user)
        .then(user => {

            // if user is registered without errors
            // create a token
            const token = jwt.sign({ id: user._id, username: user.username, semester: user.semester, selectedCourses: user.selectedCourses}, config.JwtSecret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({token: token});


        })
        .catch(error => {
            if(error.code == 11000) {
                res.status(400).json({
                    error: 'User exists',
                    message: error.message
                })
            }
            else{
                res.status(500).json({
                    error: 'Internal server error',
                    message: error.message
                })
            }
        });

};


const me = (req, res) => {
    UserModel.findById(req.userId).exec()
        .then(user => {
            if (!user) return res.status(404).json({
                error: 'Not Found',
                message: `User not found`
            });

            res.status(200).json(user);
        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));
};

const logout = (req, res) => {
    res.status(200).send({ token: null });
};


const update = (req, res) => {
   if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    let update = {$push: {selectedCourses: req.body.courseId}};

    UserModel.findByIdAndUpdate(req.userId, update)
        .exec()
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    error: 'User not found',
                    message: 'Still not found'
                });
            }
            res.status(200).json(user);

        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};


//add course to database so that it will be displayed in calendar
const selectCourse = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    let update = {$push: {selectedCourses: req.body.courseId}};

    UserModel.findByIdAndUpdate(req.userId, update)
        .exec()
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    error: 'User not found',
                    message: 'Still not found'
                });
            }
            res.status(200).json(user);

        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};


//deselect a course so that its not in calendar anymore
const deSelectCourse = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });
    UserModel.findByIdAndUpdate(req.userId, req.body)
        .exec()
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    error: 'User not found',
                    message: 'Still not found'
                });
            }
            res.status(200).json(user);

        })
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};


const read   = (req, res) => {
    UserModel.findById(req.params.id).exec()
        .then(user => {

            if (!user) return res.status(404).json({
                error: 'Not Found',
                message: `User not found`
            });

            res.status(200).json(user)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};




const Test = (req, res, next) =>{
        console.log ('Backend Routes select');
        res.render('/select/:id', {user: req.user()});
        UserModel.findByIdAndUpdate(
            user.selectedCourses,
            { $addToSet: { Strings: { $each:  [next] } } },
            { new: true }
        );

    };



module.exports = {
    login,
    register,
    logout,
    me,
    update,
    Test,
    read,
    selectCourse,
    deSelectCourse,
};