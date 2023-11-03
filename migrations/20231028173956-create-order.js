'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      // Identifiant unique et primaire pour chaque commande
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Identifiant de l'utilisateur qui a passé la commande
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // référence à la table des utilisateurs
          key: 'id' // clé étrangère basée sur l'ID de l'utilisateur
        },
        onDelete: 'CASCADE' // supprime la commande si l'utilisateur est supprimé
      },
      // Identifiant du modèle choisi pour la commande
      modelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ClothingModels', // référence à la table des modèles
          key: 'id'
        },
        onDelete: 'SET NULL' // définit la clé étrangère sur NULL si le modèle est supprimé
      },
      // Identifiant du tissu choisi pour la commande
      fabricId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fabrics', // référence à la table des tissus
          key: 'id'
        },
        onDelete: 'SET NULL' // définit la clé étrangère sur NULL si le tissu est supprimé
      },
      // Statut de la commande (e.g., en attente, expédiée, complétée, etc.)
      status: {
        type: Sequelize.STRING,
        defaultValue: 'pending' // valeur par défaut à "en attente"
      },
      // Quantité d'articles dans la commande
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1 // valeur par défaut à 1
      },
      // Prix total de la commande
      totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      // Notes ou commentaires supplémentaires sur la commande
      notes: {
        type: Sequelize.TEXT,
        allowNull: true // peut être null
      },
      // Date de création de la commande
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      // Date de mise à jour de la commande
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
