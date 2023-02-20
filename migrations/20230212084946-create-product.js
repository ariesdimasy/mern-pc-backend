"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
        field: "product_name",
      },
      price: {
        type: Sequelize.INTEGER,
        field: "price",
      },
      productDesciption: {
        type: Sequelize.STRING,
        field: "description",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: "category_id",
      },
      userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
