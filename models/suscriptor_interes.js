'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SuscriptorInteres extends Model {
    static associate(models) {
      // No es obligatorio, pero puedes agregar asociaciones aquí si lo deseas.
    }
  }

  SuscriptorInteres.init({
    interes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'intereses',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true
    },
    suscriptor_id: { // Corregido a singular
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'suscriptores',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'SuscriptorInteres',
    tableName: 'suscriptor_interes',
    timestamps: false
  });

  return SuscriptorInteres;
};
