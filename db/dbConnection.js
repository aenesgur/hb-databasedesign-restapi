const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://mongo:27017/helloBetterDb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    mongoose.connection.on('open', () => {
        console.log('mongoDb: Connected')
    });
    mongoose.connection.on('error', (err) => {
        console.log('mongoDb: Error', err);
    });

    mongoose.Promise = global.Promise;
}