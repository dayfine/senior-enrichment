import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentCard from './StudentCard'
import NewStudentForm from './NewStudentForm'

const AddButton = (props) => (
  <span className='mdc-icon-toggle addStudent' role='button' aria-pressed='false'
    aria-label='Add Student' tabIndex='0' onClick={props.handleAddButton}>
    <i className='material-icons'>add_circle</i>
  </span>
)

class Student extends Component {
  constructor () {
    super()
    this.state = {
      drawerOpen: false
    }
    this.handleAddButton = this.handleAddButton.bind(this)
  }

  handleAddButton () {
    this.setState({ drawerOpen: true })
  }

  render () {
    return (
      <div className='col-xs-12'>
        <NewStudentForm open={this.state.drawerOpen} />
        <div className='mdc-layout-grid'>
          <div className='mdc-typography--display1 col-xs-2 col-md-1'>
            <AddButton handleAddButton={this.handleAddButton} />
          </div>
          <h1 className='mdc-typography--display1 col-xs-10 col-md-11'>
          We Got Some Awesome Students!
        </h1>

          <div className='studentList'>
            {
          this.props.students.map(student => (
            <StudentCard key={student.id} {...student} />
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
    students: state.students
  }
}

export default connect(mapState)(Student)
