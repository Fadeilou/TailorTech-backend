'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un modèle de tenue peut être utilisé dans plusieurs commandes
      this.hasMany(models.Order, {
        foreignKey: 'modelId',
        as: 'orders'
      });
    }
  }
  Model.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    occasion: DataTypes.STRING,
    style: DataTypes.STRING,
    length: DataTypes.STRING,
    fit: DataTypes.STRING,
    neckline: DataTypes.STRING,
    sleeveType: DataTypes.STRING,
    pattern: DataTypes.STRING,
    decoration: DataTypes.STRING,
    closure: DataTypes.STRING,
    pockets: DataTypes.BOOLEAN,
    season: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Model',
  });
  return Model;
};