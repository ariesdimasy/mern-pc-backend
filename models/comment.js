"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Product, {
        foreignKey: "product_id",
      });
      Comment.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      models.Product.hasMany(Comment, {
        foreignKey: "product_id",
      });
      models.User.hasMany(Comment, {
        foreignKey: "user_id",
      });
    }
  }
  Comment.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      comment: {
        type: DataTypes.STRING,
        field: "comment",
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
