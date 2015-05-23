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
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        models.user.belongsToMany(models.school, {
          through: models.schoolsusers
        });
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
