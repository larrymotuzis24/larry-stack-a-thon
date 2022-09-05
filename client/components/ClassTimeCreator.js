import React, { Component} from 'react';

import { connect } from 'react-redux';

class classTimeHandler extends Component {
    constructor(){
        super();
        this.state={
            time: ['10:00', '11:00']
        }
    }
    onChange = time => this.setState({ time })

    render(){
        return (
          <div>
           
          </div>
        );

    }

}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, null)(classTimeHandler);