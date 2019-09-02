'use strict';

const cache = require('../../../infrastructures/ioredis')
const redisRepo = require('./redis')(cache);

module.exports = redisRepo;