'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      list1name: {
        type: Sequelize.STRING,
        defaultValue: 'Unsorted Schools'
      },
      list2name: {
        type: Sequelize.STRING,
        defaultValue: 'Maybe Schools'

      },
      list3name: {
        type: Sequelize.STRING,
        defaultValue: 'Probably Schools'

      },
      list4name: {
        type: Sequelize.STRING,
        defaultValue: 'Definitely Schools'

      },
      list1color: {
        type: Sequelize.STRING,
        defaultValue: "rgba(29, 28, 31, 0.7);"

      },
      list2color: {
        type: Sequelize.STRING,
        defaultValue: "rgba(255, 255, 31, 0.7)"

      },
      list3color: {
        type: Sequelize.STRING,
        defaultValue: "rgba(225, 120, 31, 0.7)"

      },
      list4color: {
        type: Sequelize.STRING,
        defaultValue: "rgba(64, 195, 31, 0.7)"
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
