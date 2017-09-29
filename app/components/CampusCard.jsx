import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import {filterStudents} from '../store'

const CampusCard = props => {
  const config = {
    ...props,
    columns: 'col-xs-12 col-md-6',
    action1: props.showStudents,
    action1text: 'Show Students',
    action2: null,
    imgStyle: {maxWidth: '100%'}
  }
  return <Card {...config} />
}

function mapState (state) {
  return {}
}

function mapDispatch (dispatch, ownProps) {
  return {
    showStudents: function (event) {
      ownProps.handleShowStudent()
      const campusId = ownProps.id
      dispatch(filterStudents(campusId))
    }
  }
}

export default connect(mapState, mapDispatch)(CampusCard)
