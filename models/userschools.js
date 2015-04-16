"use strict";
module.exports = function (sequelize, DataTypes) {
	var userschools = sequelize.define("userschools", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		schoolId: {
			type: DataTypes.INTEGER,
			references: "users",
			referencesKey: "id"
		},
		userId: {
			type: DataTypes.INTEGER,
			references: "schools",
			referencesKey: "unitId"
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: "grey"
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {
				models.user.hasMany(models.school);
				models.school.hasMany(models.user);
			}
		}
	});
	return userschools;
};