'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books',
    [
      {
        title: 'South of the border, west of the sun',
        author: 'Haruki Murakami',
        pageQuantity: 192,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('books', null, {})
};
