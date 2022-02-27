const express = require('express');
const router = express.Router();

const Course = require('../models/course');

router.post('/', (req, res, next) => {
    const addCourse = new Course(req.body);
    addCourse.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;