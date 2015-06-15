'use strict';
module.exports = function(sequelize, DataTypes) {
  var major = sequelize.define('major', {
    unitid: {
      type: DataTypes.INTEGER
    },
    major: {
      type: DataTypes.STRING
    },
    submajors: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
    timestamps: false,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return major;
};
