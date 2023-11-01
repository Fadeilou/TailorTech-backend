'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
    }
  }
  Shipping.init({
    orderId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    trackingNumber: DataTypes.STRING,
    estimatedDelivery: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};