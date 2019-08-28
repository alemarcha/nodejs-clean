'use strict';

const sequelize = require("../../../infrastructures/sequelize")
const sequelizeRepo = require('./sequelize')(sequelize);

module.exports = sequelizeRepo;