'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shippings', {
      // Identifiant unique et primaire pour chaque livraison
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Identifiant de la commande associée à la livraison
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders', // référence à la table des commandes
          key: 'id' // clé étrangère basée sur l'ID de commande
        },
        onDelete: 'CASCADE' // supprime les informations de livraison si la commande est supprimée
      },
      // Adresse de livraison
      address: {
        type: Sequelize.STRING
      },
      // Statut de la livraison (e.g., en préparation, expédié, livré, etc.)
      status: {
        type: Sequelize.STRING
      },
      // Numéro de suivi pour la livraison
      trackingNumber: {
        type: Sequelize.STRING
      },
      // Date estimée de livraison
      estimatedDelivery: {
        type: Sequelize.DATE
      },
      // Date de création de l'entrée de livraison
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour de l'entrée de livraison
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shippings');
  }
};
