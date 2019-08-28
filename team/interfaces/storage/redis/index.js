'use strict';

const redisRepo = require('./redis')(cache);

module.exports = redisRepo;