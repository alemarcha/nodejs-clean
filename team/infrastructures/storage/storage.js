'use strict';
const Repository = require('../../domains/repository');

class Storage extends Repository {
  constructor (sequelizeRepo, redisRepo) {
    super();
    this.sequelizeRepo = sequelizeRepo;
    this.redisRepo = redisRepo;
  }

    async create (team) {
    try {
        team = await this.sequelizeRepo.create(team)
        return team
    } catch (err) {
        throw new Error('Error Storage Create');
    }

  }

  async find (id) {
    // let pack = this.redisRepo.findByURLName(urlName)
    // if (!pack) {
    // pack = this.sequelizeRepo.findByURLName(urlName)
    // }
    let team = await this.sequelizeRepo.find(id);

    return team;
  }

  update (newData) {
    throw new Error('errMethod');
  }

  delete (id) {
    throw new Error('errMethod');
  }

  findByURLName (urlName) {
    throw new Error('errMethod');
  }
}

module.exports = (sequelizeRepo, redisRepo) => {
  return new Storage(sequelizeRepo, redisRepo);
};