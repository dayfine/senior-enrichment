'use strict'
const
  chalk = require('chalk'),
  debug = require('debug')('sql'),
  Sequelize = require('sequelize'),
  pkg = require('../package.json'),
  name = process.env.DATABASE_NAME || pkg.name,
  connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`

// create the database instance that can be used in other database files
module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
})
