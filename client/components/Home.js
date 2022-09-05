import React, {useState} from 'react'
import {connect} from 'react-redux'
import auth from '../store/auth'
import AllCoaches from './AllCoaches'
import IsAdminView from './isAdminView'
import ListView from './ListView'
import Scheduel from './Scheduel'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName, isAdmin, auth} = props;
  const [checked, setChecked] = useState(false);
  const [displayValue, setDisplayValue] = useState('scheduel');



  const displayViews = [
    { name: 'scheduel', value: 'scheduel' },
    { name: 'list', value: 'list' }
  ];
  
  
  return (
    <div>
      <>
      <ButtonGroup>
        {displayViews.map((dp, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            size={'sm'}
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={dp.value}
            checked={displayValue === dp.value}
            onChange={(e) => setDisplayValue(e.currentTarget.value)}
          >
            {dp.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
      {
        isAdmin ? (
          <div>
            {
               displayValue === 'scheduel' ? (
                 <AllCoaches />
                 ): 
                  <ListView />
                }
              
            </div>
        ): <Scheduel />
      }
     
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.auth.firstName,
    isAdmin:state.auth.isAdmin,
    auth:state.auth
  }
}

export default connect(mapState)(Home)
