'use strict';
module.exports = function(sequelize, DataTypes) {
    var program = sequelize.define('program', {
        programname: DataTypes.STRING,
        programcode: DataTypes.STRING
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                models.program.belongsToMany(models.school, {
                    through: models.programsschools
                });
            }
        }
    });
    return program;
};
