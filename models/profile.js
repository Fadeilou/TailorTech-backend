'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un profile peut être associé à plusieurs utilisateurs
      this.hasMany(models.User, {
        foreignKey: 'profileId',
        as: 'users'
      });
    }
  }
  Profile.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};
