const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const courseRouter = require('./routes/courseRoutes');
const lessonRouter = require('./routes/lessonRoutes');
const chapterRouter = require('./routes/chapterRoutes');
const pageRouter = require('./routes/pageRoutes');


const app = express();

//database connection
const dbConnection = require('./db/dbConnection')();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));

app.use('/api/courses', courseRouter);
app.use('/api/lessons', lessonRouter);
app.use('/api/chapters', chapterRouter);
app.use('/api/pages', pageRouter);

var server = app.listen(3000, function() {
    console.log('App is starting');
});