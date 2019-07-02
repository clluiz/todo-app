const server = require('./config/server');
require('./config/database');
const router = require('./config/routes')(server);