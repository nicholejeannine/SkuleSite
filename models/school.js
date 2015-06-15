'use strict';
module.exports = function(sequelize, DataTypes) {
    var school = sequelize.define('school', {
        unitid: DataTypes.INTEGER,
        schoolname: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        region: DataTypes.STRING,
        phone: DataTypes.STRING,
        website: DataTypes.STRING,
        aid: DataTypes.STRING,
        admissions: DataTypes.STRING,
        application: DataTypes.STRING,
        calculator: DataTypes.STRING,
        sector: DataTypes.STRING,
        levell: DataTypes.STRING,
        multicampus: DataTypes.STRING,
        multiid: DataTypes.STRING,
        multiname: DataTypes.STRING,
        womens: DataTypes.STRING,
        black: DataTypes.STRING,
        tribal: DataTypes.STRING,
        urbanization: DataTypes.STRING,
        longitude: DataTypes.STRING,
        latitude: DataTypes.STRING,
        setting: DataTypes.STRING,
        size: DataTypes.STRING,
        affiliation: DataTypes.STRING,
        cfootball: DataTypes.STRING,
        cbasketball: DataTypes.STRING,
        cbaseball: DataTypes.STRING,
        ctrack: DataTypes.STRING,
        totalapps: DataTypes.INTEGER,
        admits: DataTypes.INTEGER,
        enr: DataTypes.INTEGER,
        satrl: DataTypes.INTEGER,
        satrh: DataTypes.INTEGER,
        satml: DataTypes.INTEGER,
        satmh: DataTypes.INTEGER,
        satwl: DataTypes.INTEGER,
        satwh: DataTypes.INTEGER,
        actl: DataTypes.INTEGER,
        acth: DataTypes.INTEGER,
        appfee: DataTypes.INTEGER,
        mission: DataTypes.TEXT,
        peraid: DataTypes.INTEGER,
        loan: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
        numunder: DataTypes.INTEGER,
        numgrad: DataTypes.INTEGER,
        women: DataTypes.INTEGER,
        perinstate: DataTypes.INTEGER,
        peroutstate: DataTypes.INTEGER,
        gradrate: DataTypes.INTEGER,
        intu: DataTypes.INTEGER,
        outtu: DataTypes.INTEGER,
        ratio: DataTypes.INTEGER
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                // models.school.belongsToMany(models.schoolsusers);
                // models.school.belongsToMany(models.programsschools);
                // models.school.belongsToMany(models.ranking);
            }
        }
    });
    return school;
};
