'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('variables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      psqlName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('variables');
  }
};