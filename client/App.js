import React, { Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import Routes from './Routes'



class App extends Component {
  constructor(){
    super();
    this.state = {
      classes:[]
    }
  }
  componentDidMount(){
    console.log(this.props)
  }


  render(){
    return (
      <div>
        <div>
          <Navbar />
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
