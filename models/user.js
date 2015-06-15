'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    list1name: {
      type: DataTypes.STRING,
      defaultValue: 'Unsorted Schools'
    },
    list2name: {
      type: DataTypes.STRING,
      defaultValue: 'Maybe Schools'

    },
    list3name: {
      type: DataTypes.STRING,
      defaultValue: 'Probably Schools'

    },
    list4name: {
      type: DataTypes.STRING,
      defaultValue: 'Definitely Schools'

    },
    
      list1color: {
        type: DataTypes.STRING,
        defaultValue: "rgba(29, 28, 31, 0.7);"

      },
      list2color: {
        type: DataTypes.STRING,
        defaultValue: "rgba(255, 255, 31, 0.7)"

      },
      list3color: {
        type: DataTypes.STRING,
        defaultValue: "rgba(225, 120, 31, 0.7)"

      },
      list4color: {
        type: DataTypes.STRING,
        defaultValue: "rgba(64, 195, 31, 0.7)"
      }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // models.user.belongsToMany(models.schoolsusers);
      }
    },
    instanceMethods: {
      checkPassword: function(pass, callback) {
        if (pass && this.password) {
          bcrypt.compare(pass, this.password, callback);
        } else {
          callback(null, false);
        }
      }
    },
    hooks: {
      beforeCreate: function(user, options, sendback) {
        if (user.password) {
          bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            sendback(null, user);
          });
        } else {
          sendback(null, user);
        }
      }
    }
  });
  return user;
};
