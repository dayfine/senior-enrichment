const
  conn = require('../conn'),
  Campus = conn.define('campus', {
    name: {
      type: conn.Sequelize.STRING,
      allowNull: false
    },
    imgUrl: {
      type: conn.Sequelize.STRING,
      allowNull: false
    }
  })

module.exports = Campus
