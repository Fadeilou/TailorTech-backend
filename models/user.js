'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Chaque utilisateur appartient à un seul profil
      this.belongsTo(models.Profile, {
        foreignKey: 'profileId',
        as: 'profile'
      });

      // Définition de la relation entre User et Specialization
      this.belongsToMany(models.Specialization, {
        through: 'UserSpecializations',
        foreignKey: 'userId',
        otherKey: 'specializationId',
        as: 'specializations'
      });

      // Un utilisateur peut avoir plusieurs commandes
      this.hasMany(models.Order, {
        foreignKey: 'clientId',
        as: 'orders'
      });
      
      // Un utilisateur peut avoir plusieurs paiements
      this.hasMany(models.Payment, {
        foreignKey: 'clientId',
        as: 'payments'
      });

      // Un utilisateur peut avoir plusieurs livraisons
      this.hasMany(models.Shipping, {
        foreignKey: 'clientId',
        as: 'shippings'
      });
      
      // Un utilisateur peut avoir plusieurs mesures
      this.hasMany(models.Measurements, {
        foreignKey: 'clientId',
        as: 'measurements'
      });

      // Un agent de terrain peut prendre plusieurs mesures pour différents clients
      this.hasMany(models.Measurements, {
        foreignKey: 'agentId',
        as: 'takenMeasurements'
      });
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    address: DataTypes.TEXT,
    location: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true // L'email doit être unique pour l'authentification
    },
    password: DataTypes.STRING, // Pour stocker le mot de passe crypté
    salt: DataTypes.STRING, // Pour le sel utilisé lors de la cryptographie
    resetToken: DataTypes.STRING, // Pour la réinitialisation du mot de passe
    resetTokenExpiration: DataTypes.DATE, // Date d'expiration du token de réinitialisation
    profileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
