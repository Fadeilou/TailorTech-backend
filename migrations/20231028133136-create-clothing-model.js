'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClothingModels', {
      // Identifiant unique et primaire pour chaque modèle de vêtement
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Nom du modèle de vêtement
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Type de vêtement (e.g., chemise, robe, pantalon, etc.)
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Prix du modèle de vêtement
      price: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      // Occasion recommandée pour porter ce modèle (e.g., décontractée, formelle, sport, etc.)
      occasion: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Style du vêtement (e.g., classique, moderne, bohème, etc.)
      style: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Longueur du vêtement (e.g., court, moyen, long, etc.)
      length: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Coupe du vêtement (e.g., ajustée, ample, cintrée, etc.)
      fit: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Type d'encolure (e.g., col rond, col V, col montant, etc.)
      neckline: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Type de manche (e.g., manches longues, courtes, 3/4, sans manches, etc.)
      sleeveType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Motif du vêtement (e.g., uni, rayé, à pois, etc.)
      pattern: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Décorations présentes sur le vêtement (e.g., broderies, paillettes, etc.)
      decoration: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Type de fermeture (e.g., boutons, fermeture éclair, etc.)
      closure: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Indique si le vêtement a des poches ou non
      pockets: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      // Saison recommandée pour porter le vêtement (e.g., été, hiver, toutes saisons, etc.)
      season: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Chemin d'accès ou URL de l'image du modèle de vêtement
      picture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Date de création du modèle de vêtement dans la base de données
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour du modèle de vêtement dans la base de données
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClothingModels');
  }
};
