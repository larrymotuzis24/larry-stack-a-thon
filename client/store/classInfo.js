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

export const createClass = (classArr) => async(dispatch) => {
  console.log(classArr)
  const response = await axios.post('/classes', classArr);
  console.log(response)
  const newClass = response.data

  dispatch({type:'CREATE_CLASS', newClass})
}

export const editClass = (c, history) => {
  return async(dispatch) => {
    const response = await axios.put(`/classes/${c.id}`, c );
    const newClass = response.data;
    console.log(newClass)
    dispatch({type:'UPDATE_CLASS', newClass})
    history.push('/home')
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CLASSES:
      return action.classes
      case 'CREATE_CLASS':
        return [...state, action.newClass]
        case 'UPDATE_CLASS':
          console.log(action, 'aCTIONNNNNN', state)
        return state.map((c)=> c.id === action.newClass.id ? action.newClass : c)
    default:
      return state
  }
}
