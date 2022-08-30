import axios from 'axios';
import history from '../history';

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_WORKSHIFTS = 'SET_WORKSHIFTS'

/**
 * ACTION CREATORS
 */
const setWorkshift = () => ({type: SET_WORKSHIFTS, workshifts})

/**
 * THUNK CREATORS
 */
export const getWorkshifts = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/api/workshifts', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setWorkshift(res.data))
  }
}



export default function(state = {}, action) {
  switch (action.type) {
    case SET_WORKSHIFTS:
      return action.workshifts
    default:
      return state
  }
}
