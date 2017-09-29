const
  conn = require('../conn'),
  Student = conn.define('student', {
    name: {
      type: conn.Sequelize.STRING,
      allowNull: false
    },
    semester: {
      type: conn.Sequelize.INTEGER,
      defaultValue: 1
    },
    major: {
      type: conn.Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Division of Undergraduate Study'
    },
    imgUrl: {
      type: conn.Sequelize.STRING,
      allowNull: false
    }
  })

module.exports = Student
