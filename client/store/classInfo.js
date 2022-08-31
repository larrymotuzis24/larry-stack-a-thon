import axios from 'axios';


const TOKEN = 'token'

const classes = (state = [], action)=> {
  if(action.type === 'SET_CLASSES'){
    state = action.classes;
  }
  return state;
};

export const _setClasses = (classes) => {
  return {
    type:'SET_CLASSES',
    classes
  }    
};  

export const fetchClasses = () => async dispatch => {
const response = await axios.get('/classes', {
  headers: {
    authorization: window.localStorage.getItem('token')
  }
})
    
    return dispatch(_setClasses(response.data))
}

export default classes
