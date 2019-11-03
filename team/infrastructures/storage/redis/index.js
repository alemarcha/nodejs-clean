'use strict';

const cache = require('../../redis/ioredis')
const redisRepo = require('./redis')(cache);

module.exports = redisRepo;