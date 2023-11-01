'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Measurements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'clientId', as: 'client' });
      this.belongsTo(models.User, { foreignKey: 'agentId', as: 'agent' });
    
    }
  }
  Measurements.init({
    clientId: DataTypes.INTEGER,
    agentId: DataTypes.INTEGER,
    bust: DataTypes.FLOAT,
    waist: DataTypes.FLOAT,
    hip: DataTypes.FLOAT,
    sleeve: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    inseam: DataTypes.FLOAT,
    neck: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Measurements',
  });
  return Measurements;
};