"use strict";
module.exports = function (sequelize, DataTypes) {
	var school = sequelize.define("school", {
		unitId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		admitted: DataTypes.DECIMAL,
		enrolled: DataTypes.DECIMAL,
		tuition: DataTypes.DECIMAL,
		priceIn: DataTypes.DECIMAL,
		priceOut: DataTypes.DECIMAL,
		american: DataTypes.DECIMAL,
		asian: DataTypes.DECIMAL,
		black: DataTypes.DECIMAL,
		hispanic: DataTypes.DECIMAL,
		native: DataTypes.DECIMAL,
		white: DataTypes.DECIMAL,
		studentRatio: DataTypes.STRING,
		retention: DataTypes.DECIMAL,
		percentAid: DataTypes.DECIMAL,
		amountAid: DataTypes.DECIMAL,
		amountLoan: DataTypes.DECIMAL,
		netPrice: DataTypes.DECIMAL,
		lowIncomeNetPrice: DataTypes.DECIMAL,
		sat: DataTypes.DECIMAL,
		act: DataTypes.DECIMAL,
		state: DataTypes.STRING,
		Address: DataTypes.TEXT,
		Website: DataTypes.STRING,
		Type: DataTypes.TEXT,
		Degrees: DataTypes.TEXT,
		townType: DataTypes.STRING,
		hasHousing: DataTypes.STRING,
		numStudents: DataTypes.INTEGER,
		numUndergrads: DataTypes.INTEGER,
		graduationRate: DataTypes.DECIMAL
	}, {
		timestamps: false,

		getterMethods: {
			short: function () {
				return {
					name: this.name,
					studentRatio: this.studentRatio,
					netPrice: this.netPrice,
					sat: this.sat,
					state: this.state,
					Website: this.Website,
					Type: this.Type,
					townType: this.townType,
					numStudents: this.numStudents,
					numUndergrads: this.numUndergrads
				}
			},
			long: function () {
				return {
					name: this.name,
					admitted: this.admitted,
					enrolled: this.enrolled,
					tuition: this.tuition,
					priceIn: this.priceIn,
					priceOut: this.priceOut,
					races: [this.american, this.asian, this.black, this.hispanic, this.native, this.white],
					retention: this.retention,
					percentAid: this.percentAid,
					amountAid: this.amountAid,
					amountLoan: this.amountLoan,
					lowIncomeNetPrice: this.lowIncomeNetPrice,
					act: this.act,
					Address: this.Address,
					Degrees: this.Degrees,
					hasHousing: this.hasHousing,
					graduationRate: this.graduationRate
				}
			}
		},
		classMethods: {
			associate: function (models) {
				school.belongsToMany(models.user, {
					as: 'Schools',
					through: 'userschools'
				})
			}
		}
	});
	return school;
};