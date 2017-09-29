'use strict'
const
  api = require('express').Router(),
  {Student, Campus} = require('../db').models,
  redirect = res => { return () => res.redirect('/students') }

module.exports = api
  .get('/hello', (req, res, next) => {
    res.send({hello: 'world'})
  })

  .get('/students', (req, res, next) => {
    Student.findAll()
    .then(students => res.json(students))
    .catch(next)
  })

  .post('/students/', (req, res, next) => {
    console.log(req.body)
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
  })

  .delete('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.find({ where: {id: id} })
    .then(student => student.destroy())
    .then(() => res.send(id))
    .catch(next)
  })

  .get('/campuses', (req, res, next) => {
    Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
  })
