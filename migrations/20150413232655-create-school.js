"use strict";
module.exports = {
	up: function (migration, DataTypes, done) {
		migration.createTable("schools", {
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

		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("schools").done(done);
	}
};