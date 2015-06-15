'use strict';
module.exports = function(sequelize, DataTypes) {
  var variable = sequelize.define('variable', {
    psqlName: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return variable;
};