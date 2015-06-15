'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('rankings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      schools: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('rankings');
  }
};