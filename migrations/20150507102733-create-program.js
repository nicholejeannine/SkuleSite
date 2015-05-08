'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('programs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            programname: {
                type: Sequelize.STRING
            },
            programcode: {
                type: Sequelize.STRING
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('programs');
    }
};
