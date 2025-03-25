'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suscriptor_interes', {
      interes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'intereses', // Relacionamos con la tabla 'intereses'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      },
      suscriptor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'suscriptores', // Relacionamos con la tabla 'suscriptores'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suscriptor_interes');
  }
};
