'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interes extends Model {
    static associate(models) {
      Interes.belongsToMany(models.Suscriptor, {
        through: 'suscriptor_interes',
        foreignKey: 'interes_id'
      });
    }
  }

  Interes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Interes',
    tableName: 'intereses',
    timestamps: true
  });

  return Interes;
};
