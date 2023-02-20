"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product, {
        foreignKey: "category_id",
      });
      models.Product.belongsTo(Category, {
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      categoryName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
      underscored: true,
    }
  );
  return Category;
};
