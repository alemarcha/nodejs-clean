'use strict';
const repo = require("./repo")
const errMethod = 'ERR_SEQUELIZE_NOT_IMPLEMENTED'


class RedisRepository extends repo {
    constructor (cache) {
        super()
        this.db = cache
    }

    async create (team) {
        throw new Error(errMethod);
    }

    find () {
        throw new Error(errMethod);
    }

    update (newData) {
        throw new Error(errMethod);
    }

    delete (id) {
        throw new Error(errMethod);
    }
}

    module.exports = cache => {
        return new RedisRepository(cache)
    }