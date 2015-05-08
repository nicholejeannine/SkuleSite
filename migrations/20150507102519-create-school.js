'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('schools', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            unitid: {
                type: Sequelize.INTEGER
            },
            schoolname: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            zip: {
                type: Sequelize.STRING
            },
            region: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            website: {
                type: Sequelize.STRING
            },
            aid: {
                type: Sequelize.STRING
            },
            admissions: {
                type: Sequelize.STRING
            },
            application: {
                type: Sequelize.STRING
            },
            calculator: {
                type: Sequelize.STRING
            },
            sector: {
                type: Sequelize.STRING
            },
            levell: {
                type: Sequelize.STRING
            },
            multicampus: {
                type: Sequelize.STRING
            },
            multiid: {
                type: Sequelize.STRING
            },
            multiname: {
                type: Sequelize.STRING
            },
            womens: {
                type: Sequelize.STRING
            },
            black: {
                type: Sequelize.STRING
            },
            tribal: {
                type: Sequelize.STRING
            },
            urbanization: {
                type: Sequelize.STRING
            },
            longitude: {
                type: Sequelize.STRING
            },
            latitude: {
                type: Sequelize.STRING
            },
            setting: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            affiliation: {
                type: Sequelize.STRING
            },
            cfootball: {
                type: Sequelize.STRING
            },
            cbasketball: {
                type: Sequelize.STRING
            },
            cbaseball: {
                type: Sequelize.STRING
            },
            ctrack: {
                type: Sequelize.STRING
            },
            totalapps: {
                type: Sequelize.INTEGER
            },
            admits: {
                type: Sequelize.INTEGER
            },
            enr: {
                type: Sequelize.INTEGER
            },
            satrl: {
                type: Sequelize.INTEGER
            },
            satrh: {
                type: Sequelize.INTEGER
            },
            satml: {
                type: Sequelize.INTEGER
            },
            satmh: {
                type: Sequelize.INTEGER
            },
            satwl: {
                type: Sequelize.INTEGER
            },
            satwh: {
                type: Sequelize.INTEGER
            },
            actl: {
                type: Sequelize.INTEGER
            },
            acth: {
                type: Sequelize.INTEGER
            },
            appfee: {
                type: Sequelize.INTEGER
            },
            mission: {
                type: Sequelize.TEXT
            },
            peraid: {
                type: Sequelize.INTEGER
            },
            loan: {
                type: Sequelize.INTEGER
            },
            total: {
                type: Sequelize.INTEGER
            },
            numunder: {
                type: Sequelize.INTEGER
            },
            numgrad: {
                type: Sequelize.INTEGER
            },
            women: {
                type: Sequelize.INTEGER
            },
            perinstate: {
                type: Sequelize.INTEGER
            },
            peroutstate: {
                type: Sequelize.INTEGER
            },
            gradrate: {
                type: Sequelize.INTEGER
            },
            intu: {
                type: Sequelize.INTEGER
            },
            outtu: {
                type: Sequelize.INTEGER
            },
            ratio: {
                type: Sequelize.INTEGER
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('schools');
    }
};
