'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Measurements', {
      // Identifiant unique et primaire pour chaque mesure
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Identifiant du client associé à la mesure
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // référence à la table des utilisateurs
          key: 'id' // clé étrangère basée sur l'ID utilisateur
        },
        onDelete: 'CASCADE' // supprime les mesures si l'utilisateur est supprimé
      },
      // Identifiant de l'agent associé à la mesure
      agentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // référence à la table des utilisateurs
          key: 'id' // clé étrangère basée sur l'ID utilisateur
        },
        onDelete: 'CASCADE' // supprime les mesures si l'utilisateur est supprimé
      },
      // Mesure du buste
      bust: {
        type: Sequelize.FLOAT
      },
      // Mesure de la taille
      waist: {
        type: Sequelize.FLOAT
      },
      // Mesure des hanches
      hip: {
        type: Sequelize.FLOAT
      },
      // Mesure de la longueur des manches
      sleeve: {
        type: Sequelize.FLOAT
      },
      // Mesure de la longueur (généralement de la tête aux pieds)
      length: {
        type: Sequelize.FLOAT
      },
      // Mesure de l'entrejambe
      inseam: {
        type: Sequelize.FLOAT
      },
      // Mesure du tour de cou
      neck: {
        type: Sequelize.FLOAT
      },
      // Date de création de l'entrée
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour de l'entrée
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Measurements');
  }
};
