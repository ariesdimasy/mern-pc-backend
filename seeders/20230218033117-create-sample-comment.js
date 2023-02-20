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
      "comments",
      [
        {
          product_id: 3,
          user_id: 1,
          comment:
            "ini barang bagus, awt dan tahan lama. Mudah di gunakan juga ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          user_id: 2,
          comment:
            "casing yang sangat kokoh, warnanya juga unik. sirkulasi udaranya juga bagus dan tidak gampang panas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 8,
          user_id: 2,
          comment: "Harddisk ekternal yang aet dan tahan lama",
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("comments", null, {});
  },
};
