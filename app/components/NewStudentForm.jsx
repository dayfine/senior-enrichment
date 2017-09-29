import React, { Component } from 'react'
import { MDCTemporaryDrawer } from '@material/drawer'
import { connect } from 'react-redux'
import { createStudent } from '../store'
import axios from 'axios'
import avatar from 'cartoon-avatar'

class NewStudentForm extends Component{
  constructor () {
    super()
    this.state = {
      student: {},
      dirty: false
    }
  }

  handleChange = (event) => {
    const change = {}
    change[event.target.name] = event.target.value
    const student = Object.assign(this.state.student, change)
    this.setState({ student, dirty: true })
  }

  handleSubmit = (event) => {
     event.preventDefault()
     this.props.addStudent({...this.state.student, imgUrl: avatar.generate_avatar()})
  }

  componentDidMount () {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.formDrawer'))
    drawer.open = this.props.open
  }

  componentWillReceiveProps (nextProps) {
    const drawer = new MDCTemporaryDrawer(document.querySelector('.formDrawer'))
    drawer.open = nextProps.open
  }

  render () {
    return (
      <aside className='formDrawer mdc-temporary-drawer mdc-typography'>
        <nav className='mdc-temporary-drawer__drawer container'>
          <header className='mdc-temporary-drawer__header' />
          <form onSubmit={this.handleSubmit}>

            <div className="mdc-textfield">
              <label htmlFor="my-textfield">Name</label>
              <input name='name' type="text" id="my-textfield" className="mdc-textfield__input" onChange={this.handleChange} />
            </div>


            <div className="mdc-textfield">
              <label htmlFor="my-textfield">Semester Standing</label>
              <input name='semester' type="number" id="my-textfield" className="mdc-textfield__input" onChange={this.handleChange}/>
            </div>

            <div className="mdc-textfield">
              <label htmlFor="my-textfield">Major</label>
              <input name='major' type="text" id="my-textfield" className="mdc-textfield__input" onChange={this.handleChange}/>
            </div>


            <div className="mdc-textfield">
              <label htmlFor="my-textfield">Campus</label>
            </div>

            <div className="mdc-textfield__input">
              <select name='campusId' className="mdc-select" onChange={this.handleChange}>
                <option value="" default>Pick a campus</option>
                {
                  this.props.campuses.map(campus=>{
                    return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
                  })
                }
              </select>
            </div>


            <button type="submit" className="mdc-button mdc-button--raised">
              ADD
            </button>
         </form>
         </nav>
      </aside>
    )
  }
}

function mapState (state) {
  return {
    campuses: state.campuses
  }
}


function mapDispatch (dispatch, ownProps) {
  return {
    addStudent: function (newStudent) {
      console.log(newStudent)
      axios.post('/api/students/', newStudent)
      .then(res => res.data)
      .then(student => dispatch(createStudent(student)))
    }
  }
}

export default connect(mapState, mapDispatch)(NewStudentForm)
