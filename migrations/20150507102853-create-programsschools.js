'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('programsschools', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            schoolId: {
                type: Sequelize.INTEGER
            },
            programId: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('programsschools');
    }
};
