const User = require('../models/user');
const Course = require ('../models/course');

// create a new user called Stefan

const Stefan = new User({
    username: 'Stefan',
    password: 'password',
    matriculation: '1234',
    studentsemester: '1'
});

// call the built-in save method to save to the database
Stefan.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});

const Johannes = new User({
    username: 'Johannes',
    password: 'password',
    matriculation: '5678',
    studentsemester: '2'
});

// call the built-in save method to save to the database
Johannes.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});

const Robert = new User({
    username: 'Robert',
    password: 'password',
    matriculation: '91011',
    studentsemester: '3'
});

// call the built-in save method to save to the database
Robert.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});

const Elena = new User({
    username: 'Elena',
    password: 'password',
    matriculation: '121314',
    studentsemester: '4'
});

// call the built-in save method to save to the database
Elena.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});

const BusinessAnalytics = new Course ({

    title :'BusAn',
    titlelong : 'Business Analytics',
    credits : '5',
    description : '\t\n' +
    'Nach der Teilnahme an dem Modul kennen Studierende verbreitete Verfahren für Klassifikation, numerische Vorhersage und Clustering. ' +
    'Sie kennen die Annahmen verschiedener Verfahren und verstehen deren Funktionsweise und typische betriebswirtschaftliche Einsatzgebiete. ' +
    'Teilnehmer können Datensätze mit der Programmiersprache R analysieren und die Ergebnisse der Analysen interpretieren.',
    semester : '1',
    lecturer : 'Martin Bichler, Prof. Dr. ',
    chair : 'Decision Sciences & Systems Technical University of Munich',
    registrationstart :'01.11.2018',
    registrationend : '01.12.2018',
    exam : '22.02.2019',
    repeatexamatendofsemester : 'true',
    repeatexamatnextsemester :'false',
    practicecourse :'true',
    semesterperiodsperweek:'4',
    start:'14',
    end:'16',
    dow:'2',
    roomnumber:'5620.01.102',
    participatorrestriction:'600',
    evaluation:'1',
    comment:'excellent course',
    tag:'DecisionTree, R, Clustering, Klassifikation ',
    public:'true',
});

// call the built-in save method to save to the database
BusinessAnalytics.save(function(err) {
    if (err) throw err;

    console.log('Course saved successfully!');
});