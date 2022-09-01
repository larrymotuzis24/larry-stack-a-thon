import React from 'react'
import {connect} from 'react-redux'
import Scheduel from './Scheduel'



/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName} = props

  return (
    <div>
      <h3>Welcome, Coach {firstName} </h3>
      <Scheduel />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.auth.firstName
  }
}

export default connect(mapState)(Home)
