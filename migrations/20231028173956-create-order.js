'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      modelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Models',
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      fabricId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fabrics',
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};