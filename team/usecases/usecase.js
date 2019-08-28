const TeamService = require('../domains/service.js');
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
  async create (pack) {
    throw new Error(errMethod);
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