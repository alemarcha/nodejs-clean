'use strict';

const errMethod = 'ERR_METHOD_NOT_IMPLEMENTED_REPOSITORY'

module.exports = class Repository{
    create (team) {
        throw new Error(errMethod);
    }

    find () {
        throw new Error(errMethod);
    }

    update (id, newData) {
        throw new Error(errMethod);
    }

    delete (id) {
        throw new Error(errMethod);
    }

}