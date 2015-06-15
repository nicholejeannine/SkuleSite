'use strict';
module.exports = function(sequelize, DataTypes) {
    var schoolsusers = sequelize.define('schoolsusers', {
        schoolId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        listNumber: {
            type: DataTypes.INTEGER,
            default: 1
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return schoolsusers;
};
