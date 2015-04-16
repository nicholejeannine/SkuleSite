"use strict";
module.exports = function (sequelize, DataTypes) {
	var school = sequelize.define("school", {
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		allowNull: false
	}, {
		timestamps: false
	}, {
		classMethods: {
			associate: function (models) {
				school.belongsToMany(models.user, {
					as: 'Schools',
					through: 'userschools'
				})
			}
		}
	});
	return school;
};