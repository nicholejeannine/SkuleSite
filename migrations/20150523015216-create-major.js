'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('majors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unitid: {
        type: Sequelize.INTEGER
      },
      major: {
        type: Sequelize.STRING
      },
      submajors: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('majors');
  }
};