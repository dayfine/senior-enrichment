import React, { Component } from 'react'
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class StudentList extends Component {
  componentDidMount () {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'))
    drawer.open = !!this.props.currentCampusId
  }

  componentWillReceiveProps (nextProps) {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'))
    drawer.open = !!nextProps.currentCampusId
  }

  render () {
    const students = this.props.students.filter(s => s.campusId === this.props.currentCampusId)
    return (
      <aside className='mdc-temporary-drawer mdc-typography'>
        <nav className='mdc-temporary-drawer__drawer'>
          <header className='mdc-temporary-drawer__header'>
            <div className='mdc-temporary-drawer__header-content'>
              STUDENTS
            </div>
          </header>
          <ul id='icon-with-text-demo' className='mdc-temporary-drawer__content mdc-list'>
            {
            students.map(student => {
              return (<li className='mdc-list-item' key={student.id}>{student.name}</li>)
            })
            }
          </ul>
        </nav>
      </aside>
    )
  }
}

function mapState (state) {
  return {
    currentCampusId: state.currentCampusId,
    students: state.students
  }
}

function mapDispatch (dispatch, ownProps) {
  return {}
}

export default connect(mapState, mapDispatch)(Sidebar)
