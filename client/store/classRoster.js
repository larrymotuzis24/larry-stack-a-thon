import axios from 'axios';


const SET_ROSTERS = 'SET_ROSTERS';


export const _setRosters = (rosters) => {
  return {
    type:SET_ROSTERS,
    rosters
  }    
};  

export const fetchRosters = () => async dispatch => {
    console.log('fetchRosters')
  const response = await axios.get('/classRosters', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  
  dispatch(_setRosters(response.data))
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_ROSTERS:
      return action.rosters
    default:
      return state
  }
}
