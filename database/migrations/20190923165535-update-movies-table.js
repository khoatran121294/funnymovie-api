'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
    .changeColumn('movies', 'description', {
      type: Sequelize.TEXT
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
    .changeColumn('movies', 'description', {
      type: Sequelize.STRING
    });
  }
};
