"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
      models.Category.hasMany(Product, {
        foreignKey: "category_id",
      });
    }
  }
  Product.init(
    {
      productName: {
        type: DataTypes.STRING,
        field: "product_name",
        allowNull: false,
        unique: true,
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          min: 2000,
          isInt: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: "category_id",
        allowNull: false,
        validate: {
          isInt: true,
        },
        references: {
          model: "Category",
          key: "Category.id",
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
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
