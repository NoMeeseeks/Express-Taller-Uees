'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Suscriptor extends Model {
    static associate(models) {
      Suscriptor.belongsToMany(models.Interes, {
        through: 'suscriptor_interes',
        foreignKey: 'suscriptor_id'
      });
    }
  }

  Suscriptor.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Suscriptor',
    tableName: 'suscriptores',
    timestamps: true
  });

  return Suscriptor;
};
