import React from 'react'
import {connect} from 'react-redux'
import IsAdminView from '../../server/db/models/isAdminView'
import Scheduel from './Scheduel'



/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName, isAdmin} = props

  return (
    <div>
      <h3>Welcome, Coach {firstName} </h3>
      {
        isAdmin ? (
          <IsAdminView />
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
    isAdmin:state.auth.isAdmin
  }
}

export default connect(mapState)(Home)
