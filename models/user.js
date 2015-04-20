"use strict";
module.exports = function (sequelize, DataTypes) {
	var user = sequelize.define("user", {
		username: {
			type: DataTypes.STRING,
			autoIncrement: false,
			primaryKey: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {}
		}
	});
	return user;
};