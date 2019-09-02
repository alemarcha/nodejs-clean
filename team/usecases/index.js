let repo = require('../interfaces/storage');
let useCase = require('./usecase')(repo);

module.exports = useCase;