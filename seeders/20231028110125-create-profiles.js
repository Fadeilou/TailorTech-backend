'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Profiles', [
      { name: 'client', createdAt: new Date(), updatedAt: new Date() },
      { name: 'tailor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'superAdmin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'agent', createdAt: new Date(), updatedAt: new Date() },
      { name: 'stockManager', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
