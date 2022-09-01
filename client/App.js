import React, { Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import Routes from './Routes'
import { fetchClasses } from './store/classInfo';


class App extends Component {
  constructor(){
    super();
    this.state = {
      classes:[]
    }
  }


  render(){
    console.log(this.props.classes)
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
      fetchClass: ()=>  dispatch(fetchClasses())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
