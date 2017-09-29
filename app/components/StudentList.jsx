import React, { Component } from 'react'
import { MDCTemporaryDrawer } from '@material/drawer'
import { connect } from 'react-redux'

class Sidebar extends Component {
  componentDidMount () {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.listDrawer'))
    drawer.open = this.props.open
  }

  componentWillReceiveProps (nextProps) {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.listDrawer'))
    drawer.open = nextProps.open
  }

  render () {
    const students = this.props.students.filter(s => s.campusId === this.props.currentCampusId)
    return (
      <aside className='listDrawer mdc-temporary-drawer mdc-typography'>
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
