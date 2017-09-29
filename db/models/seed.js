const avatar = require('cartoon-avatar')
module.exports = (Student, Campus) => {
  return Promise.all([
    Campus.create({name: 'Luna', imgUrl: '/img/39.jpg'}),
    Campus.create({name: 'Mars', imgUrl: '/img/40.jpg'}),
    Campus.create({name: 'Terra', imgUrl: '/img/25.jpg'}),
    Campus.create({name: 'Titan', imgUrl: '/img/12.jpg'})
  ])
  .then(campus => {
    return Promise.all([
      Student.create({ name: 'Nate River', semester: 4, major: 'Accounting', campusId: 1, imgUrl: avatar.generate_avatar()}),
      Student.create({ name: 'Mihael Keehl', semester: 4, major: 'Design', campusId: 2, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'L Lawliet', semester: 6, major: 'Math', campusId: 3, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'Light Yagami', semester: 5, major: 'Chemistry', campusId: 4, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'Ryuk', semester: 4, major: 'Psychology', campusId: 2, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'Teru Mikami', semester: 4, major: 'Law', campusId: 2, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'Raye Penber', semester: 5, major: 'Political Science', campusId: 3, imgUrl: avatar.generate_avatar() }),
      Student.create({ name: 'Misa Amane', semester: 3, major: 'Proformance Art', campusId: 4, imgUrl: avatar.generate_avatar() })
    ])
  })
  .then(students => students)
}
