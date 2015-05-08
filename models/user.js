'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
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
