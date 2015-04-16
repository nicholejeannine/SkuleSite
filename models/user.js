"use strict";
module.exports = function (sequelize, DataTypes) {
	var user = sequelize.define("user", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {
				user.belongsToMany(models.school, {
					as: 'Users',
					through: 'userschools'
				})
			},
		}
	});
	return user;
};