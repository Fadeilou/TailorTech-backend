'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      // Identifiant unique et primaire pour chaque paiement
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Identifiant de la commande associée au paiement
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders', // référence à la table des commandes
          key: 'id' // clé étrangère basée sur l'ID de commande
        },
        onDelete: 'CASCADE' // supprime le paiement si la commande est supprimée
      },
      // Montant du paiement
      amount: {
        type: Sequelize.DECIMAL
      },
      // Méthode de paiement utilisée (e.g., carte de crédit, PayPal, etc.)
      paymentMethod: {
        type: Sequelize.STRING
      },
      // Identifiant de la transaction (généralement fourni par le fournisseur de paiement)
      transactionId: {
        type: Sequelize.STRING
      },
      // Statut du paiement (e.g., réussi, échoué, en attente, etc.)
      status: {
        type: Sequelize.STRING
      },
      // Date de création du paiement
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour du paiement
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payments');
  }
};
