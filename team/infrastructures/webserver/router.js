const controllers = require("../../interfaces/controller")

module.exports = (app) => {
  app.post('/', controllers.create);
}