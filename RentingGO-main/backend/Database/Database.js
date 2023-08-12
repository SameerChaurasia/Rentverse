const mongoose = require('mongoose');
const uri = 'mongodb+srv://houtarou29:houtarou29@cluster0.jmt7pru.mongodb.net/rentinggo';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('connected to the database'))
    .catch((err)=> console.log('error occured while connecting to the dataBase, ', err));

module.exports = mongoose.connect;