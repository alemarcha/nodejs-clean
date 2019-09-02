class TeamController {
    constructor (usecases) {
      this.usecases = usecases;
    }
    create () {
      return async (req, res, next) => {
        try {
          if (!req.body.name)
              throw new Error("Name is required");
          let team = await this.usecases.create(req.body);
  
          return res.send(200, team);
        } catch (err) {
          throw new Error(err);
        } finally {
          next();
        }
      };
    }
  }
  
  module.exports = useCase => {
    return new TeamController(useCase);
  };