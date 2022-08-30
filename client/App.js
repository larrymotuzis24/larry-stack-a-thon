import React, { Component} from 'react';

import Navbar from './components/Navbar'
import Routes from './Routes'

class App extends Component {
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

export default App
