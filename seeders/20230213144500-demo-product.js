"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "products",
      [
        {
          product_name: "Power Supply Enermax Gold",
          price: 1500000,
          description: "Power Supply Enermax Gold",
          category_id: 8,
          user_id: 1,
        },
        {
          product_name: "Logitech Speaker Z121",
          price: 150000,
          description: "Logitech Speaker Z121",
          category_id: 1,
          user_id: 1,
        },
        {
          product_name: "Harddisk Eksternal 4TB WD",
          price: 2000000,
          description: "Harddisk Eksternal 4TB WD",
          category_id: 2,
          user_id: 1,
        },
        {
          product_name: "Samsung Monitor 27 inch",
          price: 5000000,
          description: "Samsung Monitor 27 inch",
          category_id: 5,
          user_id: 1,
        },
        {
          product_name: "Power Supply Enermax Bronze 550 ",
          price: 1800000,
          description: "Power Supply Enermax Bronze 550",
          category_id: 8,
          user_id: 1,
        },
        {
          product_name: "Mouse Logitech B100 ",
          price: 80000,
          description: "Mouse Logitech B100",
          category_id: 1,
          user_id: 1,
        },
        {
          product_name: "PC Casing Fan ",
          price: 30000,
          description: "PC Casing Fan",
          category_id: 1,
          user_id: 1,
        },
        {
          product_name: "Headset bebe ",
          price: 500000,
          description: "Headset bebe",
          category_id: 1,
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
