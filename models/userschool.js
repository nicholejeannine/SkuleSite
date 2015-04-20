"use strict";
module.exports = function (sequelize, DataTypes) {
	var userschool = sequelize.define("userschool", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: DataTypes.STRING,
		unitId: DataTypes.STRING,
		schoolname: DataTypes.STRING,
		color: DataTypes.INTEGER
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {}
		}
	});
	return userschool;
};