const express = require('express');
const router = express.Router();

const Page = require('../models/page');

router.post('/', (req, res, next) => {
    const addPage = new Page(req.body);

    addPage.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;