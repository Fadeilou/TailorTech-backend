'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        name: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      occasion: {
        type: Sequelize.STRING
      },
      style: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      fit: {
        type: Sequelize.STRING
      },
      neckline: {
        type: Sequelize.STRING
      },
      sleeveType: {
        type: Sequelize.STRING
      },
      pattern: {
        type: Sequelize.STRING
      },
      decoration: {
        type: Sequelize.STRING
      },
      closure: {
        type: Sequelize.STRING
      },
      pockets: {
        type: Sequelize.BOOLEAN
      },
      season: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Models');
  }
};