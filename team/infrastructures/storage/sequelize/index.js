'use strict';

const sequelize = require("../../sequelize/sequelize")
const sequelizeRepo = require('./sequelize')(sequelize);

module.exports = sequelizeRepo;