'use strict';

const errMethod = 'ERR_REPO_SEQUELIZE_NOT_IMPLEMENTED'

module.exports = class {

    create (team) {
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