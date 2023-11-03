'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(models.ClothingModel, { foreignKey: 'modelId', as: 'clothingModel' });
      this.belongsTo(models.Fabric, { foreignKey: 'fabricId', as: 'fabric' });

      // Une commande peut avoir une seule livraison (pour simplifier, sinon, cela peut être hasMany si une commande peut avoir plusieurs livraisons)
      this.hasOne(models.Shipping, {
        foreignKey: 'orderId',
        as: 'shipping'
      });
      
      // Une commande peut avoir un seul paiement (encore une fois, cela peut être modifié selon la logique métier)
      this.hasOne(models.Payment, {
        foreignKey: 'orderId',
        as: 'payment'
      });
     
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL,
    notes: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};