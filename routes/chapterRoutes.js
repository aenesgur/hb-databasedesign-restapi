const express = require('express');
const router = express.Router();

const Chapter = require('../models/chapter');

router.post('/', (req, res, next) => {
    const addChapter = new Chapter(req.body);

    addChapter.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;