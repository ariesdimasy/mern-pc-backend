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
    await queryInterface.bulkInsert("categories", [
      {
        category_name: "motherboard",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "harddisk internal",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "processor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "memory ram",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "gpu / vga",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "ssd portable",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "keyboard",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "mouse",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_name: "fan",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("categories", null, {});
  },
};
