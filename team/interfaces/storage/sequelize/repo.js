'use strict';

const errMethod = 'ERR_METHOD_NOT_IMPLEMENTED_SEQUELIZE'

module.exports = class {

    create (pack) {
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