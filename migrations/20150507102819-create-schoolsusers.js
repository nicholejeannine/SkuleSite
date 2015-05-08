'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('schoolsusers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            schoolId: {
                type: Sequelize.INTEGER
            },
            userId: {
                type: Sequelize.INTEGER
            },
            color: {
                type: Sequelize.INTEGER,
                default: 1
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('schoolsusers');
    }
};
