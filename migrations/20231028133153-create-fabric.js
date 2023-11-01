'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fabrics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
    
      texture: {
        type: Sequelize.STRING
      },
      thickness: {
        type: Sequelize.STRING
      },
      stretchability: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      pattern: {
        type: Sequelize.STRING
      },
      washingMethod: {
        type: Sequelize.STRING
      },
      resistance: {
        type: Sequelize.STRING
      },
      transparency: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.STRING
      },
      origin: {
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
    await queryInterface.dropTable('Fabrics');
  }
};