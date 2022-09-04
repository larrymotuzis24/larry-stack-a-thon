import React from 'react'
import {connect} from 'react-redux'
import auth from '../store/auth'
import AllCoaches from './AllCoaches'
import IsAdminView from './isAdminView'
import Scheduel from './Scheduel'



/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName, isAdmin, auth} = props
  console.log(auth)

  return (
    <div>
      <h3>Welcome, Coach {firstName} </h3>
      {
        isAdmin ? (
          <AllCoaches />
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
