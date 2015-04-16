"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("schools", {
			unitId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("schools").done(done);
	}
};