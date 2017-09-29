import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import {deleteStudent} from '../store'
import axios from 'axios'

const StudentCard = props => {
  const config = {
    ...props,
    columns: 'col-xs-12 col-sm-6 col-md-4 col-lg-3',
    info: props.major + ' Major',
    action2: props.handleDelete,
    action2text: 'Delete Student',
    imgStyle: {maxWidth: '185px', display: 'inline'}
  }
  return <Card {...config} />
}

function mapState (state) {
  return {}
}

function mapDispatch (dispatch, ownProps) {
  return {
    handleDelete: function (event) {
      const studentId = ownProps.id
      axios.delete(`/api/students/${studentId}`, {body: 'don\'t care'})
      .then(res => res.data)
      .then(dispatch(deleteStudent(studentId)))
    }
  }
}

export default connect(mapState, mapDispatch)(StudentCard)
