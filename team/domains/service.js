'use strict';

const errMethod = 'ERR_METHOD_NOT_IMPLEMENTED_SERVICE'

module.exports = class Service{
    create (team) {
        throw new Error(errMethod);
    }
    find (id) {
        throw new Error(errMethod);
    }
    update (id, newData) {
        throw new Error(errMethod);
    }
    delete (id) {
        throw new Error(errMethod);
    }
}