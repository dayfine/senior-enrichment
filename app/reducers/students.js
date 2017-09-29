import axios from 'axios'

const
  GET_STUDENTS = 'GET_STUDENTS',
  CREATE_STUDENT = 'CREATE_STUDENT',
  DELETE_STUDENT = 'DELETE_STUDENT'

export function getStudents (students) {
  return {type: GET_STUDENTS, students}
}
export function createStudent (student) {
  return {type: CREATE_STUDENT, student}
}
export function deleteStudent (studentId) {
  return {type: DELETE_STUDENT, studentId}
}

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(getStudents(students))
    })
  }
}

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case CREATE_STUDENT:
      return [...state, action.student]
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId)
    default:
      return state
  }
}
