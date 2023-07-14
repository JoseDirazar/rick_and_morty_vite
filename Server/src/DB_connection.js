require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}}/rickandmorty`,
  { logging: false, native: false }
);
const models = require("./models/index")

for (const key in models) {
  models[key](sequelize);
}

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "UserFavorite" });
Favorite.belongsToMany(User, { through: "UserFavorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
