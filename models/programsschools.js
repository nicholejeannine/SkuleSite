'use strict';
module.exports = function(sequelize, DataTypes) {
    var programsschools = sequelize.define('programsschools', {
        schoolId: DataTypes.INTEGER,
        programId: DataTypes.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return programsschools;
};
