'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */return queryInterface.bulkInsert('suscriptor_interes', [{
    interes_id: 1,
    suscriptor_id: 1,
  },
  {
    interes_id: 2,
    suscriptor_id: 2,
  },
  {
    interes_id: 4,
    suscriptor_id: 2,
  },
  {
    interes_id: 1,
    suscriptor_id: 2,
  }
  ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('suscriptor_interes', null, {});
  }
};
