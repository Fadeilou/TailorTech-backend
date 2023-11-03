'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Fonction pour appliquer la migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fabrics', {
      // Identifiant unique et primaire pour chaque tissu
      id: {
        allowNull: false, // ne peut pas être null
        autoIncrement: true, // s'incrémente automatiquement
        primaryKey: true, // clé primaire
        type: Sequelize.INTEGER
      },
      // Nom du tissu
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Type de tissu (e.g., coton, laine, soie, etc.)
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Prix du tissu au mètre ou au yard
      price: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      // Texture du tissu (e.g., lisse, rugueux, doux, etc.)
      texture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Épaisseur du tissu (e.g., fin, moyen, épais, etc.)
      thickness: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Élasticité du tissu (e.g., élastique, non-élastique, etc.)
      stretchability: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Couleur dominante du tissu
      color: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Motif du tissu (e.g., uni, rayé, à pois, etc.)
      pattern: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Méthode de lavage recommandée
      washingMethod: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Résistance du tissu (e.g., résistant à l'eau, à la déchirure, etc.)
      resistance: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Transparence du tissu (e.g., transparent, opaque, etc.)
      transparency: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Finition du tissu (e.g., mat, brillant, etc.)
      finish: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Origine ou provenance du tissu
      origin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Chemin d'accès ou URL de l'image du tissu
      picture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // Date de création du tissu dans la base de données
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // Date de mise à jour du tissu dans la base de données
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Fonction pour annuler la migration
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fabrics');
  }
};
