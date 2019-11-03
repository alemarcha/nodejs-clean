let repo = require('../infrastructures/storage');
let useCase = require('./usecase')(repo);

module.exports = useCase;