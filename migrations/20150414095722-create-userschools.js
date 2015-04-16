"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("userschools", {
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
			},
		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("userschools").done(done);
	}
};