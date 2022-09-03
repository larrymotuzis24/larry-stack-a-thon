import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import CoachAccount from './components/CoachAccount';
import Home from './components/Home';
import {me} from './store';
import { fetchClasses } from './store/classInfo';
import { fetchRosters } from './store/classRoster';
import { fetchPlayers } from './store/players';
import Players from './components/Players';
import auth from './store/auth';
import isAdminView from '../server/db/models/isAdminView';
import CreateClass from './components/CreateClass';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  
  }


  render() {
    const {isLoggedIn} = this.props
    console.log(this.props)

    return (
      <div>
        { isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/account" component={CoachAccount} />
            <Route path="/players" component={Players} />
            {auth.isAdmin ? (
              <Fragment>
                  <Route path="/adminPrivlage" component={isAdminView} />
                  <Route path="/createClass" component={CreateClass} />

              </Fragment>
            ) : null}
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    classes: state.classes,
    players: state.players,
    auth:state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchClasses())
      dispatch(fetchPlayers())
      dispatch(fetchRosters())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
