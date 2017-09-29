import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {
  render () {
    return (
      <nav id='basic-tab-bar' className='mdc-tab-bar mdc-tab-bar--theme-dark'>
        <NavLink className='mdc-tab' to='/'><h4>Home</h4></NavLink>
        <NavLink className='mdc-tab' to='/students'><h4>Students</h4></NavLink>
        <span className='mdc-tab-bar__indicator' />
      </nav>
    )
  }
}
