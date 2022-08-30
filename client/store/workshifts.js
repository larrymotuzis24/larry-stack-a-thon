import axios from 'axios';


const TOKEN = 'token'

const workshifts = (state = [], action)=> {
  if(action.type === 'SET_WORKSHIFTS'){
    state = action.workshifts;
  }
  return state;
};

export const _setWorkShifts = (workshifts) => {
  return {
    type:'SET_WORKSHIFTS',
    workshifts
  }    
};  

export const fetchWorkShifts = () => async dispatch => {
const response = await axios.get('/workshifts', {
  headers: {
    authorization: window.localStorage.getItem('token')
  }
})
    
    return dispatch(_setWorkShifts(response.data))
}


export default workshifts;