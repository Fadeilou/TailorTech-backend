'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      profilePicture: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true // Assurez-vous que l'email est unique pour l'authentification
      },
      password: {
        type: Sequelize.STRING // Pour stocker le mot de passe crypté
      },
      salt: {
        type: Sequelize.STRING // Pour le sel utilisé lors de la cryptographie
      },
      resetToken: {
        type: Sequelize.STRING // Pour la réinitialisation du mot de passe
      },
      resetTokenExpiration: {
        type: Sequelize.DATE // Date d'expiration du token de réinitialisation
      },
      profileId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profiles', 
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Users');
  }
};
