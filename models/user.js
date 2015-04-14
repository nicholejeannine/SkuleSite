"use strict";
module.exports = function (sequelize, DataTypes) {
	var user = sequelize.define("user", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		timestamps: false,
		classMethods: {
			associate: function (models) {
				user.belongsToMany(school, {
					as: 'Users',
					through: 'userschools'
				})
			}
		}
	});
	return user;
};