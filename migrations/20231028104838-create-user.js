'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      // Identifiant unique et primaire pour chaque utilisateur
      id: {
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        type: Sequelize.INTEGER
      },
      // Prénom de l'utilisateur
      firstname: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      // Nom de famille de l'utilisateur
      lastname: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      // Numéro de téléphone de l'utilisateur
      phone: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      // Image de profil de l'utilisateur
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true, 
        defaultValue: 'images/profile/default.jpg' 
      },
      // Adresse de l'utilisateur
      address: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      // Localisation de l'utilisateur (par exemple, ville ou région)
      location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Adresse e-mail de l'utilisateur, utilisée pour l'authentification
      email: {
        type: Sequelize.STRING,
        unique: true, 
        allowNull: false 
      },
      // Mot de passe crypté de l'utilisateur
      password: {
        type: Sequelize.STRING, 
        allowNull: false 
      },
      // Sel utilisé pour le processus de cryptographie du mot de passe
      salt: {
        type: Sequelize.STRING, 
        allowNull: true
      },
      // Token utilisé pour la réinitialisation du mot de passe
      resetToken: {
        type: Sequelize.STRING, 
        allowNull: true
      },
      // Date d'expiration du token de réinitialisation
      resetTokenExpiration: {
        type: Sequelize.DATE, 
        allowNull: true
      },
      // Clé étrangère vers la table "Profiles"
      profileId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profiles', 
          key: 'id'
        },
        onDelete: 'CASCADE', 
        allowNull: true
      },
      // Date de création de l'utilisateur dans la base de données
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour de l'utilisateur dans la base de données
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
