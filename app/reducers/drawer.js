const FILTER_STUDENTS = 'FILTER_STUDENTS'

export function filterStudents (campusId) {
  return {type: FILTER_STUDENTS, campusId}
}

export default function reducer (currentCampusId = null, action) {
  switch (action.type) {
    case FILTER_STUDENTS:
      return action.campusId
    default:
      return currentCampusId
  }
}
