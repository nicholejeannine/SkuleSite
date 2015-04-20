"use strict";
module.exports = function (sequelize, DataTypes) {
	var school = sequelize.define("school", {
		unitId: {
			type: DataTypes.STRING,
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			get: function () {
				return this.getDataValue();
			}
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			get: function () {
				return this.getDataValue();
			}
		},
		address: {
			type: DataTypes.STRING,
			get: function () {
				return this.getDataValue();
			}
		},
		website: {
			type: DataTypes.STRING,
			get: function () {
				return this.getDataValue();
			}
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {}
		}
	});
	return school;
};