import React, { Component } from 'react'
import Student from './Student'
import Campus from './Campus'
import Nav from './Nav'
import { Route, Switch, Redirect } from 'react-router-dom'
import store, { fetchStudents, fetchCampuses } from '../store'

export default class Root extends Component {
  componentDidMount () {
    const studentsThunk = fetchStudents()
    const campusesThunk = fetchCampuses()
    store.dispatch(studentsThunk)
    store.dispatch(campusesThunk)
  }
  render () {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path='/students' component={Student} />
          <Route path='/' component={Campus} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}
