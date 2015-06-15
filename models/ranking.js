'use strict';
module.exports = function(sequelize, DataTypes) {
  var ranking = sequelize.define('ranking', {
    title: DataTypes.STRING,
    schools: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  }, {
     timestamps: false,
    classMethods: {
      associate: function(models) {
       
      }
    }
  });
  return ranking;
};