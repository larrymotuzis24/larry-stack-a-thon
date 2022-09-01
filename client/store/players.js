 import axios from 'axios';


const SET_PLAYERS = 'SET_PLAYERS';


export const _setPlayers = (players) => {
  return {
    type:SET_PLAYERS,
    players
  }    
};  

export const fetchPlayers = () => async dispatch => {
  const response = await axios.get('/players', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })
  
  dispatch(_setPlayers(response.data))
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_PLAYERS:
      return action.players
    default:
      return state
  }
}
