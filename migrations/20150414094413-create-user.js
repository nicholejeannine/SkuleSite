"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			username: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING
			},
		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("users").done(done);
	}
};