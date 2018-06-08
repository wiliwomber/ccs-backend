"use strict";
const CourseModel = require('../models/course');
var selectedCoursesModel = require('../models/selectedcourses');



const create = (req, res) => {
   if (Object.keys(req.body).length === 0) return res.status(400).json({
      error: 'Bad Request',
        message: 'The request body is empty'
    });

    CourseModel.create(req.body)
        .then(course => res.status(201).json(course))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }))
};

//Give a list of all selected courses
const findselectedcourses = (req, res) => {
    selectedCoursesModel.find(req.params.matriculation,req.params.courseid).exec()
    .then(res => {
        if (!courseid) return res.status(404).json({
            error: 'Not Found',
            message: 'No Courses selected'
        });
        res.status(200).json(selectedcourseslist)
    })
    .catch(error => res.status(500).json({
        error:'Internal Server Error',
        message:error.message
    }));
    };

//Add Course to selected Course list
const addtoselectedcourses = (req, res) => {
       selectedCoursesModel.findByIdAndUpdate(req.params.courseid,req.params.matriculation,{ new: true, runValidators: true}).exec()
    selectedCoursesModel.create(req.params.courseid)
        .then(course => res.status(201).json(course))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }))
};

//Remove Course from selected Course list
const removefromselectedcourses = (req, res) => {
    if (selectedCoursesModel.keys(req.selectedcourseslist).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    }); //User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users)
    if (selectedCoursesModel.keys(req.courseid) !== req.selectedcourseslist.courseid) return res.status(400).json({
        error: 'Bad Request',
        message: 'The Course is not selected, so it cannot be removed'
    });
selectedCoursesModel.findByIdAndRemove(req.params.id).exec()
    .then(() => res.status(200).json({message: `Course with id${req.params.id} was deleted`}))
    .catch(error => res.status(500).json({
        error: 'Internal server error',
        message: error.message
    }));
};


//Give a list of all courses
const givecourseslist = () => {
    CourseModel.find().exec()
        .then(course => {
            if (!course) return course.status(404).json({
                error: 'Not Found',
                message: 'No courses found'
            });
            course.status(200).json(course)
        })
        .catch(error => error.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));
};
//Give course by Id
const givecoursesbyId = (req, res) => {
    CourseModel.find(req.params.id).exec()
        .then(courses => {
            if (!courses) return res.status(404).json({
                error: 'Not Found',
                message: 'No courses found'
            });
            res.status(200).json(courses)
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

    CourseModel.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true}).exec()
        .then(course => res.status(200).json(course))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    CourseModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Course with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

//const listcourses = (req, res) => {
//    CourseModel.find({}).exec()
//        .then(course => res.status(200).json(course))
//        .catch(error => res.status(500).json({
//            error: 'Internal server error',
//            message: error.message
//        }));
//}; Gibt schon diese Funktion



module.exports = {
    create,
    update,
    remove,
   // listcourses,
    givecoursesbyId,
    givecourseslist,
    findselectedcourses,
    addtoselectedcourses,
    removefromselectedcourses
};