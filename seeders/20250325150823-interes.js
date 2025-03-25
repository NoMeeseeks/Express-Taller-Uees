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
    return queryInterface.bulkInsert('intereses',[
      {
        descripcion: 'Tecnología',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Ciberseguridad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Desarrollo de Software',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Inteligencia Artificial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Ciencia de Datos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Blockchain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Internet de las Cosas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Marketing Digital',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Videojuegos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Finanzas y Criptomonedas',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('intereses', null, {});
  }
};
