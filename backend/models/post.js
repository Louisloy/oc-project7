const db = require("../config/db.config");
const {Sequelize, DataTypes} = require("sequelize");

  const Post = db.define("post", {
    userName: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    message: {
      type: DataTypes.STRING
    },
    media: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    },
    _reads: {
      type: DataTypes.INTEGER
    },
    usersLiked: {
      type: DataTypes.STRING
    },
    usersRead: {
      type: DataTypes.STRING
    }
  });

  module.exports = Post;
