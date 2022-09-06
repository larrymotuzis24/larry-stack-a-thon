import axios from 'axios';


const SET_CLASSES = 'SET_CLASSES';


export const _setClasses = (classes) => {
  return {
    type:SET_CLASSES,
    classes
  }    
};  

export const fetchClasses = () => async dispatch => {
  const response = await axios.get('/classes', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  
  dispatch(_setClasses(response.data))
}

export const createClass = (c) => async(dispatch) => {
  const response = await axios.post('/classes', c);
  const newClass = response.data
  dispatch({type:'CREATE_CLASS', newClass})
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes
      case 'CREATE_CLASS':
        return [...state, action.newClass]
    default:
      return state
  }
}
