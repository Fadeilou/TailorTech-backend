'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fabric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un tissu peut être utilisé dans plusieurs commandes
      this.hasMany(models.Order, {
        foreignKey: 'fabricId',
        as: 'orders'
      });
    }
  }
  Fabric.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    texture: DataTypes.STRING,
    thickness: DataTypes.STRING,
    stretchability: DataTypes.STRING,
    color: DataTypes.STRING,
    pattern: DataTypes.STRING,
    washingMethod: DataTypes.STRING,
    resistance: DataTypes.STRING,
    transparency: DataTypes.STRING,
    finish: DataTypes.STRING,
    origin: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabric',
  });
  return Fabric;
};