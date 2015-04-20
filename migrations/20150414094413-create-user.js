var Sequelize = require('sequelize');
"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("users", {
			username: {
				type: DataTypes.STRING,
				autoIncrement: false,
				primaryKey: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}

		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("users").done(done);
	}
};