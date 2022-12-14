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
import isAdminView from './components/isAdminView';
import CreateClass from './components/CreateClass';
import Coaches from './components/AllCoaches';
import EditClass from './components/EditClass';
import { fetchCoaches } from './store/coaches';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  
  }


  render() {
    const {isLoggedIn, auth} = this.props
   

    return (
      <main>
        { auth.id ? (
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home"  component={Home}/>
            <Route exact path="/account" component={CoachAccount} />
            <Route  exact path="/allPlayers" component={Players} />
            <Route exact path="/allPlayers/page/:id" component={Players} />
            <Route exact path="/allPlayers/:id" component={Players} />
                
          
                <Route exact path="/createClass" component={CreateClass} />
                <Route exact path="/coaches" component={Coaches} />
                <Route exact path="/class/edit/:id" component={EditClass} />
                
                <Redirect to="/home" />
                </Switch>



        ) : (
          
             
                
                <Switch>
                <Route exact path="/" component={ Login } />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                </Switch>
                
            
        )}
      </main>
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
    auth:state.auth,
    coaches:state.coaches
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchClasses())
      dispatch(fetchPlayers())
      dispatch(fetchRosters())
      dispatch(fetchCoaches())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
