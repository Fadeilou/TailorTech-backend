'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specializations', {
      // Identifiant unique et primaire pour chaque spécialisation
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Nom de la spécialisation
      name: {
        type: Sequelize.STRING,
        allowNull: false // ne peut pas être null
      },
      // Description détaillée de la spécialisation
      description: {
        type: Sequelize.TEXT,
        allowNull: true // peut être null
      },
      // Date de création de la spécialisation dans la base de données
      createdAt: {
        allowNull: false, // ne peut pas être null
        type: Sequelize.DATE
      },
      // Date de mise à jour de la spécialisation dans la base de données
      updatedAt: {
        allowNull: false, // ne peut pas être null
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Specializations');
  }
};
