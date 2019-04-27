const ADD_GUN = 'add'
const REMOVE_GUN = 'remove'

// reducer
export const counter = (state=0, action) => {
  switch(action.type){
    case 'add':
      return state + 1
    case 'remove':
      return state - 1
    default:
      return 10
  }
}

// action creator
export const addGUN = () => {
  return {type: ADD_GUN}
}
export const removeGUN = () => {
  return {type: REMOVE_GUN}
}
