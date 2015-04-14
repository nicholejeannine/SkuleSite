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
				type: DataTypes.STRING
			},
			admitted: {
				type: DataTypes.DECIMAL
			},
			enrolled: {
				type: DataTypes.DECIMAL
			},
			tuition: {
				type: DataTypes.DECIMAL
			},
			priceIn: {
				type: DataTypes.DECIMAL
			},
			priceOut: {
				type: DataTypes.DECIMAL
			},
			american: {
				type: DataTypes.DECIMAL
			},
			asian: {
				type: DataTypes.DECIMAL
			},
			black: {
				type: DataTypes.DECIMAL
			},
			hispanic: {
				type: DataTypes.DECIMAL
			},
			native: {
				type: DataTypes.DECIMAL
			},
			white: {
				type: DataTypes.DECIMAL
			},
			studentRatio: {
				type: DataTypes.STRING
			},
			retention: {
				type: DataTypes.DECIMAL
			},
			percentAid: {
				type: DataTypes.DECIMAL
			},
			amountAid: {
				type: DataTypes.DECIMAL
			},
			amountLoan: {
				type: DataTypes.DECIMAL
			},
			netPrice: {
				type: DataTypes.DECIMAL
			},
			lowIncomeNetPrice: {
				type: DataTypes.DECIMAL
			},
			sat: {
				type: DataTypes.DECIMAL
			},
			act: {
				type: DataTypes.DECIMAL
			},
			state: {
				type: DataTypes.STRING
			},
			Address: {
				type: DataTypes.TEXT
			},
			Website: {
				type: DataTypes.STRING
			},
			Type: {
				type: DataTypes.TEXT
			},
			Degrees: {
				type: DataTypes.TEXT
			},
			townType: {
				type: DataTypes.STRING
			},
			hasHousing: {
				type: DataTypes.STRING
			},
			numStudents: {
				type: DataTypes.INTEGER
			},
			numUndergrads: {
				type: DataTypes.INTEGER
			},
			graduationRate: {
				type: DataTypes.DECIMAL
			},
		}).done(done);
	},
	down: function (migration, DataTypes, done) {
		migration.dropTable("schools").done(done);
	}
};