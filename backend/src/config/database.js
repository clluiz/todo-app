const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27018/todo', { useMongoClient : true });





