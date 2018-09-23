var Sequelize = require('sequelize');
var DataTypes = require('mysql');

var connection = new Sequelize('health_union', 'root', 'root', {
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

var Email = connection.define('email', {
  email_address: {
    type: Sequelize.STRING,
    value: 'matt@email.com',
    validate: {
      unique: true,
      isEmail: true,
      msg: "Please enter a valid email address"
    }
  },
  campaign: {
    type: Sequelize.STRING,
    value: "HealthUnionLeadGen",
  },
  someUnique: {
    type: Sequelize.STRING,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
    value: ""
  }
});

connection
  .sync({
    logging: console.log
  })
  .then(function () {
  Email.create{(
    
  )}
  })
  .catch(function (error) {
    console.log(error);

  });

