const db = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

  const User = db.define("user", {

fullname: {
  type: DataTypes.STRING
},
email: {
  type: DataTypes.STRING
},
password: {
  type: DataTypes.STRING
}
});

module.exports = User;
