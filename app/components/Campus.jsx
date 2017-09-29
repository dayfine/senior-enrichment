import React, { Component } from 'react'
import { connect } from 'react-redux'
import CampusCard from './CampusCard'
import StudentList from './StudentList'

class Campus extends Component {
  constructor () {
    super()
    this.state = {
      drawerOpen: false
    }
    this.handleShowStudent = this.handleShowStudent.bind(this)
  }

  handleShowStudent () {
    this.setState({ drawerOpen: true })
  }

  render () {
    return (
      <div className='col-xs-12'>
        <StudentList open={this.state.drawerOpen} />
        <div className='mdc-layout-grid'>
          <h1 className='mdc-typography--display1 col-xs-12'>
            Welcome to MH Interplanetary Academy of JavaScript!
          </h1>
          <div>
            {
          this.props.campuses.map(campus => (
            <CampusCard key={campus.id} {...campus} handleShowStudent={this.handleShowStudent} />
          ))
        }
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses
  }
}

export default connect(mapState)(Campus)
