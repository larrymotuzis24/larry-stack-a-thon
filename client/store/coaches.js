import axios from 'axios';

const SET_COACHES = 'SET_COACHES';


export const _setCoaches = (coaches) => {
    return {
      type:SET_COACHES,
      coaches
    }    
  };  


  export const fetchCoaches = () => async dispatch => {
    const response = await axios.get('/allCoaches', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    
    dispatch(_setCoaches(response.data))
  }
  

  export default function(state = [], action) {
    switch (action.type) {
      case SET_COACHES:
        return action.coaches
      default:
        return state
    }
  }
  