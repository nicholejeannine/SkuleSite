"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("userschools", {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING
			},
			unitId: {
				type: DataTypes.STRING
			},
			color: {
				type: DataTypes.INTEGER
			}
		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("userschools").done(done);
	}
};