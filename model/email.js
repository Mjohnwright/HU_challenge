module.exports = function (sequelize, DataTypes) {
  var Email = sequelize.define('email', {
    email_address: {
      type: DataTypes.STRING,
      value: 'matt@email.com',
      validate: {
        unique: true,
        isEmail: true,
        msg: "Please enter a valid email address"
      }
    },
    campaign: {
      type: DataTypes.STRING,
      value: "HealthUnionLeadGen",
    },
    someUnique: {
      type: DataTypes.STRING,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      value: ""
    }
  })
  return Email;
};

