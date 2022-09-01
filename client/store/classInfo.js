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

export default function(state = [], action) {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes
    default:
      return state
  }
}
