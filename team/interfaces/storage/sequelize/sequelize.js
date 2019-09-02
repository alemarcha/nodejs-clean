'use strict';
const repo = require("./repo")
const errMethod = 'ERR_SEQUELIZE_NOT_IMPLEMENTED'


class SequelizeRepository extends repo {
    constructor (sequelize) {
        super()
        this.db = sequelize
    }

    async create (team) {
        return this.db.models["team"].create(team)
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

    module.exports = sequelize => {
        return new SequelizeRepository(sequelize)
    }