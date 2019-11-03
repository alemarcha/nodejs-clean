let sequelizeRepo = require('./sequelize');
let redisRepo = require('./redis');
let storage = require('./storage')(sequelizeRepo, redisRepo);

module.exports = storage;