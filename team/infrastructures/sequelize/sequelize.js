const Sequelize = require('sequelize');

const db = {};
const options = {
    host: "db",
    dialect: "mysql",
    dialectOptions: {},
    replication: "",
    pool: {
        "max": 10,
        "min": 0,
        "idle": 10000,
        "evict": 10000,
        "acquire": 10000
    } ,
    define: {
      timestamps: true,
      charset: 'utf8',
      underscored: true,
      underscoredAll: true,
      freezeTableName: true
    },
    logging: "json"
};
  
const sequelize = new Sequelize(
    "test",
    "root",
    "alemarcha",
    options
  );

db.sequelize = sequelize;
db.Op = Sequelize.Op;

module.exports = db;