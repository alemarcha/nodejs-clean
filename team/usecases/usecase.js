const TeamService = require('../domains/service.js');
const TeamDomain = require('../domains/team.js');
const errMethod = 'ERR_METHOD_NOT_IMPLEMENTED_USECASE';

class TeamUseCase extends TeamService {
  constructor (repo) {
    super();
    this.repo = repo;
  }

  async find (id) {
    const team = await this.repo.find(id);
    return team;
  }
  async getAll () {
    throw new Error(errMethod);
  }
  async create (team) {
    try {
        let team = new TeamDomain(team)
        team = await this.repo.create(team)
        return team
    } catch (err) {
        throw new Error('Error Storage Create');
    }
  }
  async update (newData) {
    throw new Error(errMethod);
  }
  async delete (id) {
    throw new Error(errMethod);
  }
}

module.exports = repo => {
  return new TeamUseCase(repo);
};