import React, { Component} from 'react';
import { connect } from 'react-redux';
import _Navbar from './components/Navbar'
import Routes from './Routes'
import Home from './components/Home'



class App extends Component {
  constructor(){
    super();
    this.state = {
      classes:[]
    }
  }
  // componentDidMount(prevProps) {
  //   window.addEventListener('hashchange', () => {
  //     this.props.setView(window.location.slice(1));
  //   });

  // }
  render(){
    return (
      <div>
        <div>
          <_Navbar />
          
          <Routes />
        </div>

      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
    return {
      setView: (view) => {
        dispatch({ type: 'SET_VIEW', view });
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
