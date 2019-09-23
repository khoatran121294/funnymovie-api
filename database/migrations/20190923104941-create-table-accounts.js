'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      deletedAt: { type: Sequelize.DATE }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("accounts");
  }
};
