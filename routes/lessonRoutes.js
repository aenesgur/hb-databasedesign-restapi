const express = require('express');
const router = express.Router();

const Lesson = require('../models/lesson');

router.post('/', (req, res, next) => {
    const addLesson = new Lesson(req.body);
    addLesson.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;