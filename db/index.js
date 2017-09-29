'use strict'

const
  conn = require('./conn'),
  Campus = require('./models/Campus'),
  Student = require('./models/Student')

Student.belongsTo(Campus)
Campus.hasMany(Student)

const sync = () => conn.sync({force: true})
const seed = () => require('./models/seed')(Student, Campus)

module.exports = {sync, seed, models: {Student, Campus}}
