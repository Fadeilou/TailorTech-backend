'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    static associate(models) {
      Specialization.belongsToMany(models.User, {
        through: 'UserSpecializations',
        foreignKey: 'specializationId',
        otherKey: 'userId'
      });
    }
  }
  Specialization.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Specialization',
  });
  return Specialization;
};