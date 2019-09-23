'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: Sequelize.STRING,
      linkUrl: Sequelize.STRING,
      description: Sequelize.STRING,
      createdBy: Sequelize.STRING,
      updatedBy: Sequelize.STRING,
      deletedBy: Sequelize.STRING,
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      deletedAt: { type: Sequelize.DATE }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies");
  }
};
