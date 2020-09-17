"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "demo@demo.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Brando",
          lastName: "Endona",
          email: "brando@demo.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "admin",
          lastName: "admin",
          email: "admin@demo.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "jdc",
          lastName: "joe",
          email: "jdc@demo.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
