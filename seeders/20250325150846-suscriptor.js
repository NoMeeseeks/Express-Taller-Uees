'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('suscriptores',[
      {
        nombre: 'Xavier Santamaria',
        email: 'xaiver@example.com',
        fecha_registro: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Joseline Vergara',
        email: 'josie@example.com',
        fecha_registro: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('suscriptores', null, {});
  }
};
