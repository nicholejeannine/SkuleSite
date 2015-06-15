'use strict';
module.exports = function(sequelize, DataTypes) {
    var program = sequelize.define('program', {
        programname: DataTypes.STRING,
        programcode: DataTypes.STRING
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
            //    models.program.hasMany(models.programsschools);
            }
        }
    });
    return program;
};
